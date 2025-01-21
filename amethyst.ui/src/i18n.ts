export type Languages = {
    [key: string]: Translations;
}

export type Translations = {
    name: string,
    [key: string]: string;
}

const languages: Languages = {
    "en": {
        name: "English",
        "ClocksContainer.Intermission": "Intermission",
        "ClocksContainer.Jam": "Jam",
        "ClocksContainer.Lineup": "Lineup",
        "ClocksContainer.Period": "Period",
        "ClocksContainer.Timeout": "Timeout",
        "ColorInput.AddColor": "Add",
        "ColorInput.Name": "Shirt color",
        "ColorInput.NameRequired": "A name is required",
        "ColorInput.NameExists": "This color already exists",
        "ColorSelectButton.Hex": "Hex",
        "ColorsTable.DeleteColor": "Delete selected",
        "CombinedTimeoutList.Title": "Timeouts",
        "GameEdit.Games": "Games",
        "GameEdit.Title": "Edit game",
        "GamesManagement.DeleteGameDialog.Cancel": "Cancel",
        "GamesManagement.DeleteGameDialog.Confirm": "Delete",
        "GamesManagement.DeleteGameDialog.Description": "Are you sure you wish to delete the selected game(s)? This action cannot be undone.",
        "GamesManagement.DeleteGameDialog.Title": "Delete games",
        "GamesManagement.DeleteGame": "Delete selected",
        "GamesManagement.NewGame": "Create new...",
        "GamesManagement.Title": "Games",
        "GamesManagement.Upload": "Upload...",
        "GameRosterInput.AddSkater": "Add skater",
        "GameRosterInput.Name": "Name",
        "GameRosterInput.Number": "Number",
        "GameRosterInput.NumberExists": "A skater with that number already exists",
        "GameRosterInput.NumberInvalid": "A skater's number must be 1 to 4 digits",
        "GameRosterInput.NumberMissing": "A skater must have a number",
        "GameRosterInput.PasteRosterTip": "Tip: You can paste whole rosters in to enter multiple rows at a time",
        "GameRosterTable.Delete": "Delete",
        "GameRosterTable.DeleteCancel": "Cancel",
        "GameRosterTable.DeleteConfirm": "Delete",
        "GameRosterTable.DeleteDescription": "Are you sure you wish to permanently remove this skater? This action cannot be undone.",
        "GameRosterTable.DeleteTitle": "Delete skater",
        "GameRosterTable.Skating": "Skating",
        "GameSelectMenu.Current": "Current",
        "GameSelectMenu.SelectGame": "Select game...",
        "GameTable.AwayTeam": "Away",
        "GameTable.GameName": "Name",
        "GameTable.HomeTeam": "Home",
        "GameTable.NoGames": "No games found",
        "GameTable.Stage": "Status",
        "GameTable.Status.Finished": "Finished ({homeScore} - {awayScore})",
        "GameTable.Status.InProgress": "In progress ({homeScore} - {awayScore})",
        "GameTable.Status.Upcoming": "Upcoming",
        "GameToolbar.MakeCurrent": "Make current",
        "GameToolbar.NewGame": "New game...",
        "IntermissionClock.StartingSoon": "Starting soon...",
        "JamScore.JamScore": "Jam score",
        "LanguageMenu.Title": "Language",
        "LoginDialog.Cancel": "Cancel",
        "LoginDialog.Description": "Enter a name to uniquely indentify yourself",
        "LoginDialog.Login": "Login",
        "LoginDialog.Name": "Username",
        "LoginDialog.Title": "Login",
        "Main.Title": "Amethyst Scoreboard",
        "MainControls.StartJam": "Start jam",
        "MainControls.EndJam": "End jam",
        "MainControls.EndTimeout": "End timeout",
        "MainControls.FinalizePeriod": "Finalize period",
        "MainControls.FinalizeGame": "Finalize game",
        "MainControls.NewTimeout": "New timeout",
        "MainControls.StartLineup": "Start lineup",
        "MainControls.Undo": "Undo",
        "MainControls.Undo.JamEnded": "end jam",
        "MainControls.Undo.JamStarted": "start jam",
        "MainControls.Undo.PeriodFinalized": "finalize period",
        "MainControls.Undo.TimeoutEnded": "end timeout",
        "MainControls.Undo.TimeoutStarted": "start timeout",
        "MenuSidebar.DataGroup": "Data",
        "MenuSidebar.DisplaySettings": "Scoreboard display settings",
        "MenuSidebar.Games": "Games",
        "MenuSidebar.Help": "Help",
        "MenuSidebar.MainGroup": "Main",
        "MenuSidebar.Overlay": "Streaming overlay",
        "MenuSidebar.OverlaySettings": "Streaming overlay settings",
        "MenuSidebar.ScoreboardControl": "Scoreboard control",
        "MenuSidebar.ScoreboardDisplay": "Scoreboard display",
        "MenuSidebar.ScreensGroup": "Other screens",
        "MenuSidebar.SettingsGroup": "Settings",
        "MenuSidebar.Stats": "Stats",
        "MenuSidebar.Teams": "Teams",
        "NewGameDialog.AwayTeam": "Away team",
        "NewGameDialog.Cancel": "Cancel",
        "NewGameDialog.Create": "Create",
        "NewGameDialog.Description": "Choose the teams who will play in this game",
        "NewGameDialog.HomeTeam": "Home team",
        "NewGameDialog.GameName": "Game name",
        "NewGameDialog.ResetName": "Reset to default",
        "NewGameDialog.SelectKit": "Select kit",
        "NewGameDialog.SelectTeam": "Select team...",
        "NewGameDialog.Title": "New game",
        "NewGameDialog.UnknownTeam": "...",
        "NewGameDialog.Versus": "vs",
        "NewTeamDialog.Cancel": "Cancel",
        "NewTeamDialog.Create": "Create",
        "NewTeamDialog.ComplementaryColor": "Complementary color",
        "NewTeamDialog.ComplementaryColorTitle": "Complementary color",
        "NewTeamDialog.ComplementaryColorDescription": "A complementary color to the team's shirt color. Used for displaying text.",
        "NewTeamDialog.Description": "Enter the name and kit color for the new team",
        "NewTeamDialog.KitColor": "Shirt color",
        "NewTeamDialog.KitColorDescription": "The color of the team's shirt",
        "NewTeamDialog.KitColorRequired": "Shirt color is required",
        "NewTeamDialog.KitColorTitle": "Shirt color",
        "NewTeamDialog.TeamName": "Name",
        "NewTeamDialog.TeamNameRequired": "Team name is required",
        "NewTeamDialog.Title": "New team",
        "Overlay.Title": "Stream overlay",
        "Overlay.Clock.FinalScore": "Final score",
        "Overlay.Clock.Intermission": "Intermission",
        "Overlay.Clock.Jam": "Jam",
        "Overlay.Clock.Lineup": "Lineup",
        "Overlay.Clock.OfficialTimeout": "Official timeout",
        "Overlay.Clock.OfficialReview": "Official review",
        "Overlay.Clock.Period": "Period",
        "Overlay.Clock.StartingSoon": "Starting soon...",
        "Overlay.Clock.TeamTimeout": "Team timeout",
        "Overlay.Clock.Timeout": "Timeout",
        "Overlay.Clock.UnofficialScore": "Unofficial score",
        "Overlay.Clock.Upcoming": "Upcoming",
        "Overlay.LineupRow.StarPassMarker": " (J)",
        "Overlay.ScoreRow.Away": "Away",
        "Overlay.ScoreRow.Home": "Home",
        "OverlaySettings.FillBackground": "Fill background with color",
        "OverlaySettings.Language": "Language",
        "OverlaySettings.Scale": "Overlay scale",
        "OverlaySettings.Title": "Overlay settings",
        "RosterInput.AddSkater": "Add",
        "RosterTable.DeleteSkater": "Delete selected",
        "RosterTable.DeleteSkaterDialog.Cancel": "Cancel",
        "RosterTable.DeleteSkaterDialog.Confirm": "Delete",
        "RosterTable.DeleteSkaterDialog.Description": "Are you sure you wish to delete the selected skater(s)? This action cannot be undone.",
        "RosterTable.DeleteSkaterDialog.Title": "Delete skaters",
        "RosterInput.Name": "Name",
        "RosterInput.Number": "Number",
        "RosterInput.NumberExists": "A skater with that number already exists",
        "RosterInput.NumberInvalid": "A skater's number must be 1 to 4 digits",
        "RosterInput.NumberMissing": "A skater must have a number",
        "RosterInput.PasteRosterTip": "Tip: You can paste whole rosters in to enter multiple rows at a time",
        "RosterTable.Name": "Name",
        "RosterTable.NoSkaters": "Roster is empty",
        "RosterTable.Number": "Number",
        "RosterTable.NumberSymbol": "#",
        "Scoreboard.ConnectionLost": "Connection lost",
        "Scoreboard.IntermissionDetails.FinalScore": "Final score",
        "Scoreboard.IntermissionDetails.Intermission": "Intermission",
        "Scoreboard.IntermissionDetails.TimeToDerby": "Time to derby",
        "Scoreboard.IntermissionDetails.UnofficialScore": "Unofficial score",
        "Scoreboard.JamDetails.Jam": "Jam",
        "Scoreboard.JamDetails.Period": "Period",
        "Scoreboard.LineupDetails.Jam": "Jam",
        "Scoreboard.LineupDetails.Lineup": "Lineup",
        "Scoreboard.LineupDetails.Period": "Period",
        "Scoreboard.TimeoutDetails.Jam": "Jam",
        "Scoreboard.TimeoutDetails.OfficialReview": "Official review",
        "Scoreboard.TimeoutDetails.OfficialTimeout": "Official timeout",
        "Scoreboard.TimeoutDetails.Period": "Period",
        "Scoreboard.TimeoutDetails.TeamTimeout": "Team timeout",
        "Scoreboard.TimeoutDetails.Timeout": "Timeout",
        "Scoreboard.Title": "Scoreboard",
        "ScoreboardControl.SettingsMenu.Inputs": "Hotkeys",
        "ScoreboardControl.SettingsMenu.Settings": "Game settings",
        "ScoreboardControl.SettingsMenu.Timeline": "Timeline",
        "ScoreboardControl.ShortcutConfigurationDialog.Description": "Configure keyboard shortcuts for common controls",
        "ScoreboardControl.ShortcutConfigurationDialog.Title": "Shortcuts",
        "ScoreboardControl.Title": "Control",
        "ScoreboardSettings.Language": "Language",
        "ScoreboardSettings.ShowSidebars": "Show team color sidebars",
        "ScoreboardSettings.Title": "Display settings",
        "ScoreboardSettings.UseTextBackgrounds": "Use team colors for name",
        "Shortcut.clocks": "Clocks",
        "Shortcut.clocks.start": "Start jam",
        "Shortcut.clocks.stop": "End jam/timeout/period",
        "Shortcut.clocks.timeout": "Start new timeout",
        "Shortcut.clocks.undo": "Undo",
        "Shortcut.homeScore": "Home score",
        "Shortcut.homeScore.decrementScore": "Score -1",
        "Shortcut.homeScore.incrementScore": "Score +1",
        "Shortcut.homeScore.setTripScoreUnknown": "Set trip score to unknown (-)",
        "Shortcut.homeScore.setTripScore0": "Set trip score to 0",
        "Shortcut.homeScore.setTripScore1": "Set trip score to 1",
        "Shortcut.homeScore.setTripScore2": "Set trip score to 2",
        "Shortcut.homeScore.setTripScore3": "Set trip score to 3",
        "Shortcut.homeScore.setTripScore4": "Set trip score to 4",
        "Shortcut.awayScore": "Away score",
        "Shortcut.awayScore.decrementScore": "Score -1",
        "Shortcut.awayScore.incrementScore": "Score +1",
        "Shortcut.awayScore.setTripScoreUnknown": "Set trip score to unknown (-)",
        "Shortcut.awayScore.setTripScore0": "Set trip score to 0",
        "Shortcut.awayScore.setTripScore1": "Set trip score to 1",
        "Shortcut.awayScore.setTripScore2": "Set trip score to 2",
        "Shortcut.awayScore.setTripScore3": "Set trip score to 3",
        "Shortcut.awayScore.setTripScore4": "Set trip score to 4",
        "Shortcut.homeStats": "Home stats",
        "Shortcut.homeStats.lead": "Toggle lead",
        "Shortcut.homeStats.lost": "Toggle lost",
        "Shortcut.homeStats.called": "Toggle called",
        "Shortcut.homeStats.starPass": "Toggle star pass",
        "Shortcut.homeStats.initialTrip": "Toggle initial trip",
        "Shortcut.awayStats": "Away stats",
        "Shortcut.awayStats.lead": "Toggle lead",
        "Shortcut.awayStats.lost": "Toggle lost",
        "Shortcut.awayStats.called": "Toggle called",
        "Shortcut.awayStats.starPass": "Toggle star pass",
        "Shortcut.awayStats.initialTrip": "Toggle initial trip",
        "TeamColors.Title": "Colors",
        "TeamDetails.ColorName": "Color name",
        "TeamDetails.ColorSection": "Color",
        "TeamDetails.LeagueName": "League name",
        "TeamDetails.OverlayName": "Overlay name",
        "TeamDetails.ScoreboardName": "Scoreboard name",
        "TeamDetails.ComplementaryColor": "Complementary color",
        "TeamDetails.ShirtColor": "Shirt color",
        "TeamDetails.SkatersSection": "Skaters",
        "TeamDetails.TeamName": "Team name",
        "TeamDetails.TeamSection": "Team",
        "TeamEdit.Teams": "Teams",
        "TeamEdit.Title": "Edit team",
        "TeamLineup.Jammer": "Jammer",
        "TeamLineup.Pivot": "Pivot",
        "TeamsManagement.AddTeam": "Add team",
        "TeamsManagement.DeleteTeam": "Delete selected",
        "TeamsManagement.DeleteTeamDialog.Cancel": "Cancel",
        "TeamsManagement.DeleteTeamDialog.Confirm": "Delete",
        "TeamsManagement.DeleteTeamDialog.Description": "Are you sure you wish to delete the selected team(s)? This action cannot be undone.",
        "TeamsManagement.DeleteTeamDialog.Title": "Delete teams",
        "TeamsManagement.Title": "Teams",
        "TeamNames.LeagueName": "League name",
        "TeamNames.OverlayName": "Overlay name",
        "TeamNames.ScoreboardName": "Scoreboard name",
        "TeamNames.TeamName": "Team name",
        "TeamNames.Title": "Names",
        "TeamRoster.Title": "Roster",
        "TeamTable.LastUpdated": "Last updated",
        "TeamTable.LeagueName": "League name",
        "TeamTable.NoResults": "No results",
        "TeamTable.TeamName": "Team name",
        "ThemeMenu.Dark": "Dark",
        "ThemeMenu.Light": "Light",
        "ThemeMenu.System": "System default",
        "ThemeMenu.Title": "Theme",
        "TimeoutList.AwayTitle": "Away timeouts",
        "TimeoutList.HomeTitle": "Home timeouts",
        "TimeoutList.InProgress": "In progress",
        "TimeoutList.Retained": "Retained",
        "TimeoutType.HomeTeam": "Home team timeout",
        "TimeoutType.HomeTeamReview": "Home official review",
        "TimeoutType.Official": "Official timeout",
        "TimeoutType.AwayTeam": "Away team timeout",
        "TimeoutType.AwayTeamReview": "Away official review",
        "TripStats.Call": "Called",
        "TripStats.InitialComplete": "Initial trip",
        "TripStats.Lead": "Lead",
        "TripStats.Lost": "Lost",
        "TripStats.StarPass": "Star pass",
        "TripScore.TripScore": "Trip score",
        "UploadDialog.Cancel": "Cancel",
        "UploadDialog.Description": "Choose a WFTDA statsbook to create a game from",
        "UploadDialog.FileRequired": "A file must be provided",
        "UploadDialog.InvalidFileFormat": "File is not a valid WFTDA statsbook",
        "UploadDialog.Title": "Upload statsbook",
        "UploadDialog.Upload": "Upload",
        "UserMenu.Login": "Login",
        "UserMenu.Logout": "Logout",
        "UserMenu.Welcome": "Hi, {userName}",
        "ViewMenu.AwayTeam": "Away team",
        "ViewMenu.BothTeams": "Both teams",
        "ViewMenu.ClockControls": "Clock controls",
        "ViewMenu.Clocks": "Clocks",
        "ViewMenu.FullScreen": "Full screen",
        "ViewMenu.HomeTeam": "Home team",
        "ViewMenu.JamTimerPreset": "Jam timer",
        "ViewMenu.LineupControls": "Lineup controls",
        "ViewMenu.Presets": "Presets",
        "ViewMenu.ScoreboardPreset": "Scoreboard operator",
        "ViewMenu.ScoreControls": "Score controls",
        "ViewMenu.ScorekeeperPreset": "Scorekeeper",
        "ViewMenu.ScoreSheet": "Score sheet",
        "ViewMenu.StatsControls": "Stats controls",
        "ViewMenu.Timeouts": "Timeouts",
    },
    "es": {
        name: "Español",
        "ClocksContainer.Intermission": "Descanso",
        "ClocksContainer.Jam": "Jam",
        "ClocksContainer.Lineup": "Lineup",
        "ClocksContainer.Period": "Periodo",
        "ClocksContainer.Timeout": "Tiempo muerto",
        "GameSelectMenu.Current": "Actual",
        "GameSelectMenu.SelectGame": "Seleccionar juego...",
        "GameToolbar.MakeCurrent": "Hacer actual",
        "GameToolbar.NewGame": "Nuevo juego...",
        "JamScore.JamScore": "Puntuación de jam",
        "LanguageMenu.Title": "Idioma",
        "MainControls.StartJam": "Iniciar el jam",
        "MainControls.EndJam": "Terminar el jam",
        "MainControls.EndTimeout": "Terminar el tiempo muerto",
        "MainControls.FinalizePeriod": "Finalizar periodo",
        "MainControls.FinalizeGame": "Finalize juego",
        "MainControls.NewTimeout": "Nuevo tiempo muerto",
        "MainControls.Undo": "Anular",
        "MenuSidebar.DataGroup": "Información",
        "MenuSidebar.Games": "Juegos",
        "MenuSidebar.MainGroup": "General",
        "MenuSidebar.ScoreboardDisplay": "Visualización del marcador",
        "MenuSidebar.ScoreboardControl": "Control del marcador",
        "MenuSidebar.Teams": "Equipos",
        "NewGameDialog.Title": "Nuevo juego",
        "NewGameDialog.Description": "Elige los equipos que jugarán en este juego",
        "NewGameDialog.SelectTeam": "Seleccionar equipo...",
        "NewGameDialog.HomeTeam": "Equipo local",
        "NewGameDialog.AwayTeam": "Equipo visitante",
        "NewGameDialog.ResetName": "Restablecer a valores predeterminados",
        "NewGameDialog.GameName": "Nombre del juego",
        "NewGameDialog.UnknownTeam": "...",
        "NewGameDialog.Versus": "vs",
        "ThemeMenu.Dark": "Oscuro",
        "ThemeMenu.Light": "Claro",
        "ThemeMenu.System": "Sistema predeterminado",
        "ThemeMenu.Title": "Tema",
        "TimeoutType.HomeTeam": "Tiempo muerto del equipo local",
        "TimeoutType.HomeTeamReview": "Reseña oficial del equipo local",
        "TimeoutType.Official": "Tiempo muerto de los oficiales",
        "TimeoutType.AwayTeam": "Tiempo muerto del equipo visitante",
        "TimeoutType.AwayTeamReview": "Reseña oficial del equipo visitante",
        "TripScore.TripScore": "Puntuación de trip",
    },
    "jp": {
        name: "日本語",
        "ClocksContainer.Intermission": "幕間",
        "ClocksContainer.Jam": "一回り",
        "ClocksContainer.Lineup": "並ぶ",
        "ClocksContainer.Period": "期間",
        "ClocksContainer.Timeout": "タイムアウト",
        "GameSelectMenu.Current": "現行",
        "GameSelectMenu.SelectGame": "ゲームを選択",
        "GameToolbar.MakeCurrent": "最新のものにする",
        "GameToolbar.NewGame": "新しいゲーム...",
        "JamScore.JamScore": "ジャムスコア",
        "LanguageMenu.Title": "国語",
        "MainControls.StartJam": "ジャムを始める",
        "MainControls.EndJam": "ジャム終了",
        "MainControls.EndTimeout": "タイムアウト終了",
        "MainControls.FinalizePeriod": "終了期間",
        "MainControls.FinalizeGame": "ゲームを終了する",
        "MainControls.NewTimeout": "新しいタイムアウト",
        "MainControls.Undo": "元に戻す",
        "MenuSidebar.DataGroup": "データ",
        "MenuSidebar.Games": "ゲーム",
        "MenuSidebar.MainGroup": "一般的な",
        "MenuSidebar.ScoreboardControl": "スコアボードコントロール",
        "MenuSidebar.ScoreboardDisplay": "スコアボード表示",
        "MenuSidebar.Teams": "チーム",
        "NewGameDialog.Title": "新しいゲーム",
        "NewGameDialog.Description": "この試合に出場するチームを選択してください",
        "NewGameDialog.SelectTeam": "チームを選択...",
        "NewGameDialog.HomeTeam": "ホームチーム",
        "NewGameDialog.AwayTeam": "アウェイチーム",
        "NewGameDialog.ResetName": "デフォルトにリセット",
        "NewGameDialog.GameName": "ゲーム名",
        "NewGameDialog.UnknownTeam": "...",
        "NewGameDialog.Versus": "対",
        "ThemeMenu.Dark": "ダーク",
        "ThemeMenu.Light": "ライト",
        "ThemeMenu.System": "システムのデフォルト",
        "ThemeMenu.Title": "テーマ",
        "TimeoutType.HomeTeam": "ホームチームのタイムアウト",
        "TimeoutType.HomeTeamReview": "ホームチームの公式レビュー",
        "TimeoutType.Official": "審判のタイムアウト",
        "TimeoutType.AwayTeam": "アウェイチームのタイムアウト",
        "TimeoutType.AwayTeamReview": "アウェイチーム公式レビュー",
        "TripScore.TripScore": "旅行スコア",
    },
};

export default languages;