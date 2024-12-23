﻿using amethyst.DataStores;
using amethyst.Domain;
using amethyst.Events;
using amethyst.Reducers;
using amethyst.Services;
using FluentAssertions;

namespace amethyst.tests.Reducers;

public class TeamDetailsUnitTests : ReducerUnitTest<HomeTeamDetails, TeamDetailsState>
{
    [Test]
    public async Task TeamSet_WhenTeamMatches_UpdatesTeam()
    {
        var team = new GameTeam(
            new()
            {
                ["test"] = "Test Team",
            },
            new(Color.White, Color.Black),
            Enumerable.Range(1, 15).Select(i => new Skater(i.ToString(), $"Skater {i}")).ToList());

        State = new(new GameTeam([], new(Color.White, Color.Black), []));

        await Subject.Handle(new TeamSet(0, new(TeamSide.Home, team)));

        State.Should().Be(new TeamDetailsState(team));
    }

    [Test]
    public async Task TeamSet_WhenTeamDoesNotMatch_DoesNotChangeState()
    {
        State = new(new GameTeam([], new(Color.White, Color.Black), []));

        var originalState = State;

        await Subject.Handle(new TeamSet(0,
            new(TeamSide.Away, new GameTeam([], new(Color.Black, Color.White), []))));

        State.Should().Be(originalState);
    }
}