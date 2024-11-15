﻿using amethyst.DataStores;
using amethyst.Domain;
using amethyst.Events;
using amethyst.Reducers;
using amethyst.Services;
using Autofac;
using Autofac.Extras.Moq;
using Microsoft.Extensions.Logging;
using Moq;

namespace amethyst.tests.EventHandling;

[TestFixture]
public abstract class EventBusIntegrationTest
{
    private Lazy<AutoMock> _mocker = new(() => throw new Exception("Mocker cannot be used until Setup() has run"));
    protected AutoMock Mocker => _mocker.Value;

    protected IEventBus EventBus { get; private set; } = null!;
    protected GameInfo Game { get; private set; } = null!;
    protected IGameStateStore StateStore { get; private set; } = null!;

    private Tick _lastTick = 0;

    protected Mock<TMock> GetMock<TMock>() where TMock : class => Mocker.Mock<TMock>();
    protected TConcrete Create<TConcrete>() where TConcrete : class => Mocker.Create<TConcrete>();

    [OneTimeSetUp]
    protected virtual void OneTimeSetup()
    {
    }

    [SetUp]
    protected virtual void Setup()
    {
        Game = new GameInfo(Guid.NewGuid(), "Integration test game");

        _lastTick = 0;
        _mocker = new(() => AutoMock.GetLoose(builder =>
        {
            var reducerTypes = GetReducerTypes().ToArray();
            builder.RegisterTypes(reducerTypes).As<IReducer>();

            builder.RegisterType<GameStateStore>().As<IGameStateStore>().SingleInstance();
            builder.Register(context => new GameContext(Game, [], context.Resolve<IGameStateStore>(), context.Resolve<IGameClock>()));

            var createLoggerMethod =
                typeof(LoggerFactoryExtensions).GetMethods()
                    .Single(method => method is { IsGenericMethod: true, Name: nameof(LoggerFactoryExtensions.CreateLogger) });

            builder.RegisterGeneric((_, types) =>
                    createLoggerMethod.MakeGenericMethod(types.Single()).Invoke(null, [
                        LoggerFactory.Create(options => options.AddConsole().SetMinimumLevel(LogLevel.Debug))
                    ])!)
                .As(typeof(ILogger<>));

            builder.RegisterType<GameContextFactory>().As<IGameContextFactory>().SingleInstance();
        }));

        StateStore = Mocker.Create<IGameStateStore>();

        GetMock<IGameDataStore>()
            .Setup(mock => mock.AddEvent(It.IsAny<Event>()))
            .Returns((Event @event) => @event.Id);

        GetMock<IGameDataStoreFactory>()
            .Setup(mock => mock.GetDataStore(It.IsAny<string>()))
            .Returns(() => GetMock<IGameDataStore>().Object);

        EventBus = Mocker.Create<EventBus>();

        Mocker.Create<GameContextFactory>().GetGame(Game);
    }

    [TearDown]
    protected virtual void Teardown()
    {
    }

    [OneTimeTearDown]
    protected virtual void OneTimeTeardown()
    {
    }

    protected async Task AddEvents(params Event[] events)
    {
        foreach (var @event in events)
        {
            if (@event is ValidateStateFakeEvent validate)
            {
                await Tick(@event.Tick);
                validate.ValidateStates(StateStore);
            }
            else
            {
                await EventBus.AddEvent(Game, @event);
            }
        }
    }

    protected TState GetState<TState>() where TState : class =>
        StateStore.GetState<TState>();

    protected TState GetState<TState>(string key) where TState : class =>
        StateStore.GetKeyedState<TState>(key);

    protected Task Tick(Func<Tick, Tick> tick) =>
        Tick(tick(_lastTick));

    protected async Task Tick(Tick tick)
    {
        var tickReceivers =
            GetReducerTypes()
                .Where(t => t.IsAssignableTo(typeof(ITickReceiverAsync)))
                .Select(t => Mocker.Create(t))
                .Cast<ITickReceiverAsync>()
                .ToArray();

        foreach (var receiver in tickReceivers)
        {
            var implicitEvents = await receiver.TickAsync(tick);
            foreach (var @event in implicitEvents)
                await EventBus.AddEventWithoutPersisting(Game, @event);
        }

        _lastTick = tick;
    }

    private static IEnumerable<Type> GetReducerTypes() =>
        typeof(IReducer).Assembly.GetExportedTypes()
            .Where(t => !t.IsAbstract && t.IsAssignableTo(typeof(IReducer)));
}