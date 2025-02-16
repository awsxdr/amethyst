﻿using amethyst.Domain;
using amethyst.Services;

namespace amethyst.Events;

public sealed class SkaterOnTrack(Guid7 id, SkaterOnTrackBody body) : Event<SkaterOnTrackBody>(id, body);
public sealed record SkaterOnTrackBody(TeamSide TeamSide, string SkaterNumber, SkaterPosition Position) : TeamEventBody(TeamSide);

public sealed class SkaterOffTrack(Guid7 id, SkaterOffTrackBody body) : Event<SkaterOffTrackBody>(id, body);
public sealed record SkaterOffTrackBody(TeamSide TeamSide, string SkaterNumber) : TeamEventBody(TeamSide);

public sealed class SkaterAddedToJam(Guid7 id, SkaterAddedToJamBody body) : Event<SkaterAddedToJamBody>(id, body);
public sealed record SkaterAddedToJamBody(TeamSide TeamSide, int Period, int Jam, string SkaterNumber, SkaterPosition Position) : TeamEventBody(TeamSide);

public sealed class SkaterRemovedFromJam(Guid7 id, SkaterRemovedFromJamBody body) : Event<SkaterRemovedFromJamBody>(id, body);
public sealed record SkaterRemovedFromJamBody(TeamSide TeamSide, int Period, int Jam, string SkaterNumber) : TeamEventBody(TeamSide);

public enum SkaterPosition
{
    Jammer,
    Pivot,
    Blocker
}

