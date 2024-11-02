﻿using System.Collections.Concurrent;
using amethyst.Services;
using Func;
using Microsoft.AspNetCore.SignalR;

namespace amethyst.Hubs;

public class GameStatesNotifier(IGameDiscoveryService gameDiscoveryService, IHubContext<GameStatesHub> hubContext, IGameContextFactory contextFactory)
{
    private readonly ConcurrentDictionary<Guid, List<string>> _watchedStatesByGame = new();

    public void WatchStateName(Guid gameId, string stateName)
    {
        var watchedStates = _watchedStatesByGame.GetOrAdd(gameId, _ => new());

        lock (watchedStates)
        {
            if (watchedStates.Contains(stateName)) return;

            watchedStates.Add(stateName);

            var gameContext = GetGameContext(gameId);

            gameContext.StateStore.WatchStateByName(
                stateName,
                async state =>
                {
                    await hubContext.Clients.Group($"{gameId}_{stateName}").SendAsync("StateChanged", stateName, state);
                });
        }

    }

    private GameContext GetGameContext(Guid gameId) =>
        gameDiscoveryService.GetExistingGame(gameId)
                .ThenMap(contextFactory.GetGame)
            switch
            {
                Success<GameContext> context => context.Value,
                _ => throw new GameNotFoundHubException()
            };

    public class GameNotFoundHubException : HubException;
}

public class GameStatesHub(
    GameStatesNotifier notifier,
    IGameDiscoveryService gameDiscoveryService
    ) : Hub
{
    public async Task WatchState(string stateName)
    {
        var gameId = GetGameId();

        await Groups.AddToGroupAsync(Context.ConnectionId, $"{gameId}_{stateName}");

        notifier.WatchStateName(gameId, stateName);
    }

    private Guid GetGameId()
    {
        var gameId = Context.GetHttpContext()?.GetRouteValue("gameId") as string;

        if (
            gameId is null
            || !Guid.TryParse(gameId, out var gameIdGuid)
            || !gameDiscoveryService.GameExists(gameIdGuid))
        {
            throw new GameNotFoundHubException();
        }

        return gameIdGuid;
    }

    public class GameNotFoundHubException : HubException;
}