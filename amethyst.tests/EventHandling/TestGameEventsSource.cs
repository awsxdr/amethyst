﻿using amethyst.Domain;
using amethyst.Events;
using amethyst.Reducers;

namespace amethyst.tests.EventHandling;

public static class TestGameEventsSource
{
    public static Event[] SingleJamWithScores => new EventsBuilder(0, [])
        .Validate(new GameStageState(Stage.BeforeGame, 0, 0, false))
        .Event<IntermissionEnded>(15)
        .Validate(new GameStageState(Stage.Lineup, 1, 0, false))
        .Event<JamStarted>(12)
        // TODO: Lead jammer
        .Wait(15)
        .Validate(
            ("Home", new TeamScoreState(0)),
            ("Away", new TeamScoreState(0)),
            ("Home", new TripScoreState(0, 0)),
            ("Away", new TripScoreState(0, 0))
        )
        .Event<ScoreModifiedRelative>(0).WithBody(new ScoreModifiedRelativeBody(TeamSide.Home, 4))
        .Validate(tick => [
            ("Home", new TeamScoreState(4)),
            ("Away", new TeamScoreState(0)),
            ("Home", new TripScoreState(4, tick)),
            ("Away", new TripScoreState(0, 0))
        ])
        .Wait(2)
        .Event<ScoreModifiedRelative>(0).WithBody(new ScoreModifiedRelativeBody(TeamSide.Away, 4))
        .Validate(tick => [
            ("Home", new TeamScoreState(4)),
            ("Away", new TeamScoreState(4)),
            ("Home", new TripScoreState(4, tick - 2000)),
            ("Away", new TripScoreState(4, tick))
        ])
        .Wait(2)
        .Validate(tick => [
            ("Home", new TeamScoreState(4)),
            ("Away", new TeamScoreState(4)),
            ("Home", new TripScoreState(0, tick - 1000)),
            ("Away", new TripScoreState(4, tick - 2000))
        ])
        .Wait(2)
        .Validate(tick => [
            ("Home", new TeamScoreState(4)),
            ("Away", new TeamScoreState(4)),
            ("Home", new TripScoreState(0, tick - 3000)),
            ("Away", new TripScoreState(0, tick - 1000))
        ])
        .Wait(15)
        .Event<JamEnded>(2)
        .Event<ScoreModifiedRelative>(0).WithBody(new ScoreModifiedRelativeBody(TeamSide.Home, 3))
        .Event<ScoreModifiedRelative>(0).WithBody(new ScoreModifiedRelativeBody(TeamSide.Away, 1))
        .Validate(
            ("Home", new TeamScoreState(7)),
            ("Away", new TeamScoreState(5))
        )
        .Build();

    public static Event[] SingleJamStartedWithoutEndingIntermission => new EventsBuilder(0, [])
        .Validate(new GameStageState(Stage.BeforeGame, 0, 0, false))
        .Event<JamStarted>(30)
        .Validate(new GameStageState(Stage.Jam, 1, 1, false))
        .Build();

    public static Event[] FullGame => new EventsBuilder(0, [])
        .Validate(new GameStageState(Stage.BeforeGame, 0, 0, false))
        .Event<IntermissionEnded>(15)
        .Validate(new GameStageState(Stage.Lineup, 1, 0, false))
        .Event<JamStarted>(120 + 30) // Jam that runs for full duration
        .Validate(
            ("Home", new TeamTimeoutsState(3, ReviewStatus.Unused, TimeoutInUse.None)),
            ("Away", new TeamTimeoutsState(3, ReviewStatus.Unused, TimeoutInUse.None))
        )
        .Event<JamStarted>(57) // Jam that is called
        .Event<JamEnded>(30)
        .Event<JamStarted>(95)
        .Event<JamEnded>(25)
        .Event<TimeoutStarted>(0) // Team timeout
        .Event<TimeoutTypeSet>(60).WithBody(new TimeoutTypeSetBody(TimeoutType.Team, TeamSide.Home))
        .Validate(
            ("Home", new TeamTimeoutsState(2, ReviewStatus.Unused, TimeoutInUse.Timeout)),
            ("Away", new TeamTimeoutsState(3, ReviewStatus.Unused, TimeoutInUse.None))
        )
        .Event<TimeoutEnded>(25)
        .Validate(
            ("Home", new TeamTimeoutsState(2, ReviewStatus.Unused, TimeoutInUse.None)),
            ("Away", new TeamTimeoutsState(3, ReviewStatus.Unused, TimeoutInUse.None))
        )
        .Event<JamStarted>(30)
        .Event<JamEnded>(30)
        .Event<JamStarted>(107)
        .Event<JamStarted>(1) // Invalid jam start
        .Event<JamEnded>(30)
        .Event<JamStarted>(145)
        .Event<TimeoutStarted>(0) // Official timeout
        .Event<TimeoutTypeSet>(218).WithBody(new TimeoutTypeSetBody(TimeoutType.Official, null))
        .Validate(
            ("Home", new TeamTimeoutsState(2, ReviewStatus.Unused, TimeoutInUse.None)),
            ("Away", new TeamTimeoutsState(3, ReviewStatus.Unused, TimeoutInUse.None))
        )
        .Event<TimeoutEnded>(15)
        .Event<JamStarted>(82)
        .Event<JamEnded>(31) // Overrunning lineup
        .Event<JamStarted>(58)
        .Event<JamEnded>(30)
        .Event<JamStarted>(120 + 15)
        .Validate(new GameStageState(Stage.Lineup, 1, 9, false))
        .Event<TimeoutStarted>(90) // Timeout not ended
        .Event<JamStarted>(76)
        .Event<JamEnded>(30)
        .Event<JamStarted>(112)
        .Event<JamEnded>(30)
        .Event<TimeoutStarted>(0)
        .Event<TimeoutTypeSet>(10).WithBody(new TimeoutTypeSetBody(TimeoutType.Team, TeamSide.Away))
        .Validate(
            ("Home", new TeamTimeoutsState(2, ReviewStatus.Unused, TimeoutInUse.None)),
            ("Away", new TeamTimeoutsState(2, ReviewStatus.Unused, TimeoutInUse.Timeout))
        )
        .Event<TimeoutTypeSet>(10).WithBody(new TimeoutTypeSetBody(TimeoutType.Team, TeamSide.Home))
        .Validate(
            ("Home", new TeamTimeoutsState(1, ReviewStatus.Unused, TimeoutInUse.Timeout)),
            ("Away", new TeamTimeoutsState(3, ReviewStatus.Unused, TimeoutInUse.None))
        )
        .Event<JamStarted>(121)
        .Event<JamEnded>(29) // Late jam ended
        .Event<JamStarted>(68)
        .Event<JamEnded>(30)
        .Event<JamStarted>(60)
        .Event<JamEnded>(30)
        .Event<JamStarted>(93)
        .Event<JamEnded>(30)
        .Event<JamStarted>(112)
        .Event<JamEnded>(0)
        .Validate(new GameStageState(Stage.Intermission, 1, 16, false))
        .Event<PeriodFinalized>(10 * 60)
        .Validate(new GameStageState(Stage.Intermission, 2, 0, true))
        .Validate(tick => [new IntermissionClockState(true, false, tick + 5 * 60 * 1000, 5 * 60)])
        .Wait(5 * 60)
        .Validate(tick => [new IntermissionClockState(true, true, tick, 0)])
        .Event<JamStarted>(94)
        .Validate(new GameStageState(Stage.Jam, 2, 1, false))
        .Event<JamEnded>(30)
        .Event<JamStarted>(120 + 15)
        .Event<TimeoutStarted>(0) // Multiple timeouts
        .Event<TimeoutTypeSet>(160).WithBody(new TimeoutTypeSetBody(TimeoutType.Official, null))
        .Validate(
            ("Home", new TeamTimeoutsState(1, ReviewStatus.Unused, TimeoutInUse.None)),
            ("Away", new TeamTimeoutsState(3, ReviewStatus.Unused, TimeoutInUse.None))
        )
        .Event<TimeoutStarted>(0)
        .Event<TimeoutTypeSet>(60).WithBody(new TimeoutTypeSetBody(TimeoutType.Team, TeamSide.Home))
        .Validate(
            ("Home", new TeamTimeoutsState(0, ReviewStatus.Unused, TimeoutInUse.Timeout)),
            ("Away", new TeamTimeoutsState(3, ReviewStatus.Unused, TimeoutInUse.None))
        )
        .Event<TimeoutEnded>(16)
        .Validate(
            ("Home", new TeamTimeoutsState(0, ReviewStatus.Unused, TimeoutInUse.None)),
            ("Away", new TeamTimeoutsState(3, ReviewStatus.Unused, TimeoutInUse.None))
        )
        .Event<TimeoutStarted>(7)
        .Event<TimeoutTypeSet>(0).WithBody(new TimeoutTypeSetBody(TimeoutType.Review, TeamSide.Home))
        .Validate(tick => [
            new GameStageState(Stage.Timeout, 2, 2, false),
            new TimeoutClockState(true, tick - 7000, 0, 7000, 7),
            new PeriodClockState(
                false,
                false,
                tick - (94 + 30 + 120 + 15 + 160 + 60 + 16 + 7) * 1000,
                0,
                (94 + 30 + 120 + 15) * 1000,
                94 + 30 + 120 + 15),
            ("Home", new TeamTimeoutsState(0, ReviewStatus.Unused, TimeoutInUse.Review)),
            ("Away", new TeamTimeoutsState(3, ReviewStatus.Unused, TimeoutInUse.None))
        ])
        .Event<JamStarted>(109)
        .Validate(
            ("Home", new TeamTimeoutsState(0, ReviewStatus.Used, TimeoutInUse.None)),
            ("Away", new TeamTimeoutsState(3, ReviewStatus.Unused, TimeoutInUse.None))
        )
        .Event<JamEnded>(30)
        .Event<JamStarted>(35)
        .Event<TimeoutStarted>(612) // Timeout started mid-jam (injury, for example)
        .Event<JamStarted>(10)
        .Validate(tick => [
            new GameStageState(Stage.Jam, 2, 5, false),
            new JamClockState(true, tick - 10000, 10000, 10),
            new PeriodClockState(
                true, 
                false,
                tick - 10000,
                (94 + 30 + 120 + 15 + 109 + 30 + 35) * 1000,
                (94 + 30 + 120 + 15 + 109 + 30 + 35 + 10) * 1000,
                94 + 30 + 120 + 15 + 109 + 30 + 35 + 10),
        ])
        .Wait(120 + 30)
        .Event<JamStarted>(42)
        .Event<JamEnded>(30)
        .Event<JamStarted>(59)
        .Event<JamEnded>(30)
        .Event<TimeoutStarted>(0)
        .Event<TimeoutTypeSet>(123).WithBody(new TimeoutTypeSetBody(TimeoutType.Review, TeamSide.Away))
        .Validate(
            ("Home", new TeamTimeoutsState(0, ReviewStatus.Used, TimeoutInUse.None)),
            ("Away", new TeamTimeoutsState(3, ReviewStatus.Unused, TimeoutInUse.Review))
        )
        .Event<TimeoutEnded>(0)
        .Validate(
            ("Home", new TeamTimeoutsState(0, ReviewStatus.Used, TimeoutInUse.None)),
            ("Away", new TeamTimeoutsState(3, ReviewStatus.Used, TimeoutInUse.None))
        )
        .Event<JamStarted>(119) // Jam at nearly full length
        .Event<JamEnded>(30)
        .Event<JamStarted>(52)
        .Event<JamEnded>(15)
        .Validate(tick => [
            new GameStageState(Stage.Lineup, 2, 9, false),
            new LineupClockState(true, tick - 15000, 15000, 15),
        ])
        .Wait(15)
        .Event<JamStarted>(49)
        .Event<JamEnded>(30)
        .Event<JamStarted>(72)
        .Event<JamEnded>(30)
        .Event<JamStarted>(95)
        .Event<JamEnded>(30)
        .Event<JamStarted>(27)
        .Event<JamEnded>(30)
        .Event<JamStarted>(20)
        .Event<JamEnded>(30)
        .Event<JamStarted>(97)
        .Event<JamEnded>(30)
        .Event<JamStarted>(58)
        .Event<JamEnded>(30)
        .Event<JamStarted>(73)
        .Event<JamEnded>(30)
        .Event<JamStarted>(52)
        .Event<JamEnded>(30)
        .Event<JamStarted>(30)
        .Event<JamEnded>(22)
        .Validate(new GameStageState(Stage.AfterGame, 2, 19, false))
        .Wait(10)
        .Event<PeriodFinalized>(1)
        .Validate(new GameStageState(Stage.AfterGame, 2, 19, true))
        .Build();
}