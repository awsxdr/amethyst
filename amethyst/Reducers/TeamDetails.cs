﻿using amethyst.DataStores;
using amethyst.Domain;
using amethyst.Events;
using amethyst.Extensions;
using amethyst.Services;
using Func;

namespace amethyst.Reducers;

public abstract class TeamDetails(TeamSide teamSide, ReducerGameContext context, ILogger logger) 
    : Reducer<TeamDetailsState>(context)
    , IHandlesEvent<TeamSet>
{
    protected override TeamDetailsState DefaultState => new(new GameTeam(
        new() { ["default"] = teamSide == TeamSide.Home ? "Black" : "White" },
        teamSide == TeamSide.Home
            ? new TeamColor(Color.Black, Color.White)
            : new TeamColor(Color.White, Color.Black),
        []));

    public override Option<string> GetStateKey() =>
        Option.Some(teamSide.ToString());

    public IEnumerable<Event> Handle(TeamSet @event) => @event.HandleIfTeam(teamSide, () =>
    {
        if (!@event.Body.Team.Names.TryGetValue("default", out var defaultName))
            defaultName = @event.Body.Team.Names.FirstOrDefault().Value ?? "";

        logger.LogInformation("Setting team for {side} to {name}", teamSide, defaultName);

        SetState(new (@event.Body.Team));

        return [];
    });
}

public sealed record TeamDetailsState(GameTeam Team);

public sealed class HomeTeamDetails(ReducerGameContext context, ILogger<HomeTeamDetails> logger) : TeamDetails(TeamSide.Home, context, logger);
public sealed class AwayTeamDetails(ReducerGameContext context, ILogger<AwayTeamDetails> logger) : TeamDetails(TeamSide.Away, context, logger);
