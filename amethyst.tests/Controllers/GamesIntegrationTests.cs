﻿using System.Net;
using amethyst.Controllers;
using amethyst.DataStores;
using amethyst.Hubs;
using FluentAssertions;
using Microsoft.AspNetCore.SignalR.Client;

namespace amethyst.tests.Controllers;

public class GamesIntegrationTests : ControllerIntegrationTest
{
    private GamesController.GameModel _game;

    public override void Setup()
    {
        base.Setup();

        _game = Post<GamesController.GameModel>("/api/games", new GamesController.CreateGameModel("Test game"), HttpStatusCode.Created).Result!;
    }

    [Test]
    public async Task NewGameAddedToGamesList()
    {
        var gamesList = await Get<GamesController.GameModel[]>("/api/games", HttpStatusCode.OK);
        gamesList.Should().NotBeNull();
        gamesList!.Length.Should().Be(1);
        gamesList.Should().BeEquivalentTo(new[] { _game });
    }

    [Test]
    public async Task GetCurrentGame_WhenNotSet_ReturnsNotFoundStatus()
    {
        var result = await Get("/api/games/current");
        result.StatusCode.Should().Be(HttpStatusCode.NotFound);
    }

    [Test]
    public async Task GetCurrentGame_AfterSet_ReturnsCurrentGame()
    {
        await Put("/api/games/current", new GamesController.SetCurrentGameModel(_game.Id), HttpStatusCode.OK);
        var result = await Get<GamesController.GameModel>("/api/games/current", HttpStatusCode.OK);

        result.Should().Be(_game);
    }

    [Test]
    public async Task SetCurrentGame_NotifiesWatchingClients()
    {
        var connection = await GetHubConnection("api/hubs/system");

        await connection.InvokeAsync(nameof(SystemStateHub.WatchSystemState));

        var taskCompletionSource = new TaskCompletionSource<Guid>();

        connection.On("CurrentGameChanged", (GameInfo newGame) =>
        {
            taskCompletionSource.SetResult(newGame.Id);
        });

        await Put("/api/games/current", new GamesController.SetCurrentGameModel(_game.Id), HttpStatusCode.OK);

        var gameId = await taskCompletionSource.Task;

        gameId.Should().Be(_game.Id);
    }

    [Test]
    public async Task GetGame_ReturnsGameDetails()
    {
        var game = await GetGame();

        game.Should().Be(_game);
    }

    [Test]
    public async Task GetGame_WhenGameNotFound_ReturnsNotFound()
    {
        await GetGame(gameId: Guid.NewGuid(), expectedResult: HttpStatusCode.NotFound);
    }

    private async Task<GamesController.GameModel> GetGame(Guid? gameId = null, HttpStatusCode expectedResult = HttpStatusCode.OK) =>
        (await Get<GamesController.GameModel>($"/api/games/{gameId ?? _game.Id}", expectedResult))!;


    protected override void CleanDatabase()
    {
        GameDataStoreFactory?.ReleaseConnections();
        GC.Collect(); // Force SQLite to release database files

        foreach (var databaseFile in Directory.GetFiles(GameDataStore.GamesFolder, "*.db"))
        {
            File.Delete(databaseFile);
        }
    }
}