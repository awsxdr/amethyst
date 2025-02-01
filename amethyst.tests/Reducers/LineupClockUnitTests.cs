﻿using amethyst.Events;
using amethyst.Reducers;
using amethyst.Services;
using FluentAssertions;

using static amethyst.tests.DataGenerator;

namespace amethyst.tests.Reducers;

public class LineupClockUnitTests : ReducerUnitTest<LineupClock, LineupClockState>
{
    [Test]
    public async Task JamStart_WhenClockRunning_StopsLineup()
    {
        var randomTick = Random.Shared.Next(0, 100000);

        State = new(true, randomTick, randomTick, 0);

        var secondRandomTick = randomTick + Random.Shared.Next(1, 100000);

        await Subject.Handle(new JamStarted(secondRandomTick));

        State.IsRunning.Should().BeFalse();
        State.StartTick.Should().Be(randomTick);
    }

    [Test]
    public async Task JamStart_WhenClockStopped_DoesNotChangeState()
    {
        var randomTick = Random.Shared.Next(0, 100000);

        State = new(false, randomTick, randomTick, 0);

        var secondRandomTick = randomTick + Random.Shared.Next(1, 10000);
        await Subject.Handle(new JamStarted(secondRandomTick));

        State.IsRunning.Should().BeFalse();
    }

    [Test]
    public async Task JamEnded_WhenClockStopped_AndPeriodClockNotExpired_StartsLineup()
    {
        var randomTick = Random.Shared.Next(1, 100000);
        State = new(false, randomTick, randomTick, 0);

        MockState(new TimeoutClockState(false, 0, 0, 0, 0));
        MockState(new PeriodClockState(true, false, 0, 0, Rules.DefaultRules.PeriodRules.Duration - 10000, (int)((Rules.DefaultRules.PeriodRules.Duration - 10000) / 1000)));

        var secondRandomTick = randomTick + Random.Shared.Next(1, 100000);
        await Subject.Handle(new JamEnded(secondRandomTick));

        State.IsRunning.Should().BeTrue();
        State.StartTick.Should().Be(secondRandomTick);
        State.TicksPassed.Should().Be(0);
    }

    [Test]
    public async Task JamEnded_WhenLineupAlreadyRunning_DoesNotChangeState()
    {
        var randomTick = GetRandomTick();
        State = new(true, randomTick, 0, 0);

        var secondTick = randomTick + 100000;
        var ticksPassed = secondTick - randomTick;

        await ((ITickReceiver)Subject).TickAsync(secondTick);
        await Subject.Handle(new JamEnded(secondTick + 1));

        State.IsRunning.Should().BeTrue();
        State.StartTick.Should().Be(randomTick);
        State.TicksPassed.Should().Be(ticksPassed);
        State.SecondsPassed.Should().Be(ticksPassed.Seconds);
    }

    [Test]
    public async Task LineupClockSet_SetsLineupClock()
    {
        State = new LineupClockState(true, 0, 10000, 10);

        await Subject.Handle(new LineupClockSet(20000, new(30)));

        State.StartTick.Should().Be(20000 - 30000);
        State.TicksPassed.Should().Be(30000);
        State.SecondsPassed.Should().Be(30);
    }

    [Test]
    public async Task Tick_WhenClockRunning_UpdatesTicksPassed()
    {
        State = new(true, 0, 0, 0);
        await Tick(10000);

        State.TicksPassed.Should().Be(10000);
    }

    [Test]
    public async Task Tick_ClockStopped_DoesNotChangeState()
    {
        State = new(false, 0, 0, 0);
        await Tick(130 * 1000);

        State.IsRunning.Should().BeFalse();
        State.StartTick.Should().Be(0);
        State.TicksPassed.Should().Be(0);
    }

    [Test]
    public async Task TimeoutStarted_WhenClockRunning_StopsLineup()
    {
        var randomTick = Random.Shared.Next(0, 100000);

        State = new(true, randomTick, randomTick, 0);

        var secondRandomTick = randomTick + Random.Shared.Next(1, 100000);

        await Subject.Handle(new TimeoutStarted(secondRandomTick));

        State.IsRunning.Should().BeFalse();
        State.StartTick.Should().Be(randomTick);
    }

    [Test]
    public async Task JamEnded_WhenTimeoutClockRunning_DoesNotStartLineup()
    {
        var randomTick = Random.Shared.Next(0, 100000);

        State = new(false, randomTick, randomTick, 0);

        var secondRandomTick = randomTick + Random.Shared.Next(1, 100000);

        GetMock<IGameStateStore>()
            .Setup(mock => mock.GetState<TimeoutClockState>())
            .Returns(() => new(true, 0, 0, 0, 0));

        await Subject.Handle(new JamEnded(secondRandomTick));

        State.IsRunning.Should().BeFalse();
    }
}