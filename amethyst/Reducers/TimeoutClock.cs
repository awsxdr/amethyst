﻿using amethyst.Domain;
using amethyst.Events;
using amethyst.Services;

namespace amethyst.Reducers;

public class TimeoutClock(ReducerGameContext context, ILogger<TimeoutClock> logger) 
    : Reducer<TimeoutClockState>(context)
    , IHandlesEvent<JamStarted>
    , IHandlesEvent<TimeoutStarted>
    , IHandlesEvent<TimeoutEnded>
    , IHandlesEvent<TimeoutClockSet>
    , ITickReceiver
{
    protected override TimeoutClockState DefaultState => new(false, 0, 0, 0, 0);

    public IEnumerable<Event> Handle(JamStarted @event)
    {
        var state = GetState();
        if (state.IsRunning)
        {
            logger.LogDebug("Jam started; stopping timeout at {tick}", @event.Tick);
            var endTick = state.EndTick > 0 ? state.EndTick : @event.Tick;
            SetState(state with
            {
                IsRunning = false, 
                EndTick = endTick,
                TicksPassed = endTick - state.StartTick,
            });
        }

        return [];
    }

    public IEnumerable<Event> Handle(TimeoutStarted @event)
    {
        logger.LogDebug("New timeout started at {tick}", @event.Tick);
        SetState(DefaultState with { IsRunning = true, StartTick = @event.Tick });

        return [];
    }

    public IEnumerable<Event> Handle(TimeoutEnded @event)
    {
        var state = GetState();

        if (state is { IsRunning: true, EndTick: 0 })
        {
            logger.LogDebug("Ending timeout at {tick}", @event.Tick);
            SetState(state with { EndTick = @event.Tick });
        }
        else
        {
            logger.LogDebug("Timeout ended but timeout has already ended at {tick}", @event.Tick);
        }

        return [];
    }

    public IEnumerable<Event> Handle(TimeoutClockSet @event)
    {
        var state = GetState();

        var ticksPassed = Domain.Tick.FromSeconds(@event.Body.SecondsPassed);

        SetState(state with
        {
            StartTick = @event.Tick - ticksPassed,
            TicksPassed = ticksPassed,
            SecondsPassed = @event.Body.SecondsPassed,
        });

        return [];
    }

    public IEnumerable<Event> Tick(Tick tick)
    {
        var state = GetState();

        if (!state.IsRunning) return [];

        var newState = state with
        {
            TicksPassed = tick - state.StartTick,
            SecondsPassed = (int)((tick - state.StartTick) / 1000L),
        };
        SetState(newState);

        return [];
    }
}

public record TimeoutClockState(bool IsRunning, long StartTick, long EndTick, [property: IgnoreChange] long TicksPassed, int SecondsPassed);