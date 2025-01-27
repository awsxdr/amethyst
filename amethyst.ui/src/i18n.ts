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
        "LoginDialog.Description": "Enter a name to uniquely identify yourself",
        "LoginDialog.Login": "Login",
        "LoginDialog.Name": "Username",
        "LoginDialog.Title": "Login",
        "Main.Title": "Amethyst Scoreboard",
        "MainControls.StartJam": "Start jam",
        "MainControls.StartJam.Description": "Start the next jam in the game. This will end any current timeouts and start the period clock.",
        "MainControls.EndJam": "End jam",
        "MainControls.EndJam.Description": "End the current jam.",
        "MainControls.EndTimeout": "End timeout",
        "MainControls.EndTimeout.Description": "End the current timeout. This will not restart the period clock.",
        "MainControls.FinalizePeriod": "Finalize period",
        "MainControls.FinalizePeriod.Description": "End the current period and move to the next. New jams will start in the current period until this is done.",
        "MainControls.FinalizeGame": "Finalize game",
        "MainControls.FinalizeGame.Description": "Finalize the game. This will mark the current score as final and prevent any further changes.",
        "MainControls.NewTimeout": "New timeout",
        "MainControls.NewTimeout.Description": "Start a new untyped timeout. This will end any in-progress jams and stop the period clock.",
        "MainControls.StartLineup": "Start lineup",
        "MainControls.StartLineup.Description": "Start the lineup clock. This is an optional step before the game starts.",
        "MainControls.Undo": "Undo",
        "MainControls.Undo.JamEnded": "end jam",
        "MainControls.Undo.JamEnded.Description": "Undo ending the previous jam.",
        "MainControls.Undo.JamStarted": "start jam",
        "MainControls.Undo.JamStarted.Description": "Undo starting the current jam.",
        "MainControls.Undo.PeriodFinalized": "finalize period",
        "MainControls.Undo.PeriodFinalized.Description": "Undo finalizing the period.",
        "MainControls.Undo.TimeoutEnded": "end timeout",
        "MainControls.Undo.TimeoutEnded.Description": "Undo ending the previous timeout.",
        "MainControls.Undo.TimeoutStarted": "start timeout",
        "MainControls.Undo.TimeoutStarted.Description": "Undo starting the current timeout.",
        "MenuSidebar.ControlGroup": "Control",
        "MenuSidebar.DataGroup": "Data",
        "MenuSidebar.DisplayGroup": "Displays",
        "MenuSidebar.DisplaySettings": "Scoreboard display settings",
        "MenuSidebar.Games": "Games",
        "MenuSidebar.Help": "Help",
        "MenuSidebar.Overlay": "Streaming overlay",
        "MenuSidebar.OverlaySettings": "Streaming overlay settings",
        "MenuSidebar.Penalties": "Penalty whiteboard",
        "MenuSidebar.PenaltyLineup": "Penalty/lineup tracking",
        "MenuSidebar.Rulesets": "Rulesets",
        "MenuSidebar.ScoreboardControl": "Scoreboard control",
        "MenuSidebar.ScoreboardDisplay": "Scoreboard display",
        "MenuSidebar.ScreensGroup": "Other screens",
        "MenuSidebar.SettingsGroup": "Settings",
        "MenuSidebar.Stats": "Stats",
        "MenuSidebar.Teams": "Teams",
        "MenuSidebar.Users": "Users",
        "NewGameDialog.AwayTeam": "Away team",
        "NewGameDialog.Cancel": "Cancel",
        "NewGameDialog.Create": "Create",
        "NewGameDialog.Description": "Choose the teams who will play in this game",
        "NewGameDialog.GameName": "Game name",
        "NewGameDialog.HomeTeam": "Home team",
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
        "Scoreboard.TeamDetails.StarPassInicator": "SP",
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
        "ScoreSheetContainer.Header": "Score sheet",
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
        "ShortcutButton.Shortcut": "Shortcut",
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
        "TimeoutList.Title": "{teamName} timeouts",
        "TimeoutList.InProgress": "In progress",
        "TimeoutList.Retained": "Retained",
        "TimeoutType.Team": "{teamName} team timeout",
        "TimeoutType.Team.Description": "Set current timeout type to a team timeout for {teamName}. Does not start a new timeout.",
        "TimeoutType.TeamReview": "{teamName} official review",
        "TimeoutType.TeamReview.Description": "Set current timeout type to a review for {teamName}. Does not start a new timeout.",
        "TimeoutType.Official": "Official timeout",
        "TimeoutType.Official.Description": "Set current timeout type to official timeout. Does not start a new timeout.",
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
        "UsersManagement.Title": "Users",
        "UsersManagement.Import": "Import user(s)",
        "UsersManagement.Export": "Export selected",
        "UsersManagement.DeleteUser": "Delete selected",
        "UsersManagement.DeleteUserDialog.Cancel": "Cancel",
        "UsersManagement.DeleteUserDialog.Confirm": "Delete",
        "UsersManagement.DeleteUserDialog.Description": "Are you sure you wish to delete the selected user(s)? This action cannot be undone.",
        "UsersManagement.DeleteUserDialog.Title": "Delete users",
        "UsersManagement.UserTable.NoResults": "No users",
        "UsersManagement.UserTable.UserName": "Name",
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
        "ClocksContainer.Lineup": "Alineación",
        "ClocksContainer.Period": "Periodo",
        "ClocksContainer.Timeout": "Tiempo muerto",
        "ColorInput.AddColor": "Añadir",
        "ColorInput.Name": "Color del kit",
        "ColorInput.NameRequired": "Se requiere un nombre",
        "ColorInput.NameExists": "Este color ya existe",
        "ColorSelectButton.Hex": "Hexadecimal",
        "ColorsTable.DeleteColor": "Eliminar seleccionados",
        "CombinedTimeoutList.Title": "Tiempo muertos",
        "GameEdit.Games": "Juegos",
        "GameEdit.Title": "Editar juego",
        "GamesManagement.DeleteGameDialog.Cancel": "Cancelar",
        "GamesManagement.DeleteGameDialog.Confirm": "Eliminar",
        "GamesManagement.DeleteGameDialog.Description": "¿Está seguro de que desea eliminar los juegos seleccionados? Esta acción no se puede deshacer.",
        "GamesManagement.DeleteGameDialog.Title": "Eliminar juegos",
        "GamesManagement.DeleteGame": "Eliminar seleccionados",
        "GamesManagement.NewGame": "Crear nuevo...",
        "GamesManagement.Title": "Juegos",
        "GamesManagement.Upload": "Subir...",
        "GameRosterInput.AddSkater": "Añadir patinadore",
        "GameRosterInput.Name": "Nombre",
        "GameRosterInput.Number": "Número",
        "GameRosterInput.NumberExists": "Ya existe un patinadore con este número",
        "GameRosterInput.NumberInvalid": "El número de une patinadore debe tener entre 1 y 4 dígitos",
        "GameRosterInput.NumberMissing": "Une patinadore debe tener un número",
        "GameRosterInput.PasteRosterTip": "Consejo: puedes pegar listas completas para ingresar varias filas a la vez",
        "GameRosterTable.Delete": "Eliminar",
        "GameRosterTable.DeleteCancel": "Cancelar",
        "GameRosterTable.DeleteConfirm": "Eliminar",
        "GameRosterTable.DeleteDescription": "¿Estás seguro de que deseas eliminar permanentemente a este patinadore? Esta acción no se puede deshacer.",
        "GameRosterTable.DeleteTitle": "Eliminar patinadore",
        "GameRosterTable.Skating": "Patinaje",
        "GameSelectMenu.Current": "Actual",
        "GameSelectMenu.SelectGame": "Seleccionar juego...",
        "GameTable.AwayTeam": "Visitante",
        "GameTable.GameName": "Nombre",
        "GameTable.HomeTeam": "Local",
        "GameTable.NoGames": "No se encontraron juegos",
        "GameTable.Stage": "Estado",
        "GameTable.Status.Finished": "Terminado ({homeScore} - {awayScore})",
        "GameTable.Status.InProgress": "En progreso ({homeScore} - {awayScore})",
        "GameTable.Status.Upcoming": "Venidero",
        "GameToolbar.MakeCurrent": "Hacer actual",
        "GameToolbar.NewGame": "Nuevo juego...",
        "IntermissionClock.StartingSoon": "Empezando pronto...",
        "JamScore.JamScore": "Puntuación de jam",
        "LanguageMenu.Title": "Idioma",
        "LoginDialog.Cancel": "Cancelar",
        "LoginDialog.Description": "Introduzca un nombre para identificarse de forma única",
        "LoginDialog.Login": "Acceso",
        "LoginDialog.Name": "Nombre de usuario",
        "LoginDialog.Title": "Acceso",
        "Main.Title": "Amethyst Marcador",
        "MainControls.StartJam": "Iniciar jam",
        "MainControls.StartJam.Description": "Comienzar la siguiente jam. Esto pondrá fin a los tiempos muertos actuales y comenzará el reloj del período.",
        "MainControls.EndJam": "Terminar jam",
        "MainControls.EndJam.Description": "Terminar el jam actual.",
        "MainControls.EndTimeout": "Terminar tiempo muerto",
        "MainControls.EndTimeout.Description": "Finalizar el tiempo muerto actual. Esto no reiniciará el reloj del período.",
        "MainControls.FinalizePeriod": "Finalizar periodo",
        "MainControls.FinalizePeriod.Description": "Finalizar el período actual y pasar al siguiente. Se iniciarán nuevas jams en el período actual hasta que esto termine.",
        "MainControls.FinalizeGame": "Finalizar juego",
        "MainControls.FinalizeGame.Description": "Finalizar el juego. Esto marcará el puntaje actual como definitivo y evitará cambios posteriores.",
        "MainControls.NewTimeout": "Nuevo tiempo muerto",
        "MainControls.NewTimeout.Description": "Iniciar un nuevo tiempo muerto sin tipo. Esto finalizará cualquier jam en curso y pausará el reloj del período.",
        "MainControls.StartLineup": "Iniciar alineación",
        "MainControls.StartLineup.Description": "Iniciar el tiempo de alineación. Este es un paso opcional antes de que comience el periodo.",
        "MainControls.Undo": "Deshacer",
        "MainControls.Undo.JamEnded": "terminar jam",
        "MainControls.Undo.JamEnded.Description": "Deshacer el final del jam anterior.",
        "MainControls.Undo.JamStarted": "iniciar jam",
        "MainControls.Undo.JamStarted.Description": "Deshacer el inicio del jam actual.",
        "MainControls.Undo.PeriodFinalized": "finalizar periodo",
        "MainControls.Undo.PeriodFinalized.Description": "Deshacer la finalización del periodo.",
        "MainControls.Undo.TimeoutEnded": "terminar tiempo muerto",
        "MainControls.Undo.TimeoutEnded.Description": "Deshacer la finalización del tiempo muerto anterior.",
        "MainControls.Undo.TimeoutStarted": "iniciar tiempo muerto",
        "MainControls.Undo.TimeoutStarted.Description": "Deshacer el inicio del tiempo muerto actual.",
        "MenuSidebar.ControlGroup": "Control",
        "MenuSidebar.DataGroup": "Información",
        "MenuSidebar.DisplayGroup": "Pantallas",
        "MenuSidebar.DisplaySettings": "Configuración del marcador",
        "MenuSidebar.Games": "Juegos",
        "MenuSidebar.Help": "Ayuda",
        "MenuSidebar.Overlay": "Superposición de streaming",
        "MenuSidebar.OverlaySettings": "Configuracion de superposición",
        "MenuSidebar.Penalties": "Pizarra de penalidades",
        "MenuSidebar.PenaltyLineup": "Penalidad/alineación seguimiento",
        "MenuSidebar.Rulesets": "Conjuntos de reglas",
        "MenuSidebar.ScoreboardControl": "Control del marcador",
        "MenuSidebar.ScoreboardDisplay": "Visualización del marcador",
        "MenuSidebar.ScreensGroup": "Otras pantallas",
        "MenuSidebar.SettingsGroup": "Configuraciónes",
        "MenuSidebar.Stats": "Estadísticas",
        "MenuSidebar.Teams": "Equipos",
        "MenuSidebar.Users": "Usuaries",
        "NewGameDialog.AwayTeam": "Equipo visitante",
        "NewGameDialog.Cancel": "Cancelar",
        "NewGameDialog.Create": "Crear",
        "NewGameDialog.Description": "Elige los equipos que jugarán en este juego",
        "NewGameDialog.GameName": "Nombre del juego",
        "NewGameDialog.HomeTeam": "Equipo local",
        "NewGameDialog.ResetName": "Restablecer a valores predeterminados",
        "NewGameDialog.SelectKit": "Seleccionar kit",
        "NewGameDialog.SelectTeam": "Seleccionar equipo...",
        "NewGameDialog.Title": "Nuevo juego",
        "NewGameDialog.UnknownTeam": "...",
        "NewGameDialog.Versus": "vs",
        "NewTeamDialog.Cancel": "Cancelar",
        "NewTeamDialog.Create": "Crear",
        "NewTeamDialog.ComplementaryColor": "Color complementario",
        "NewTeamDialog.ComplementaryColorTitle": "Color complementario",
        "NewTeamDialog.ComplementaryColorDescription": "Un color complementario al color del kit del equipo. Se utiliza para mostrar texto.",
        "NewTeamDialog.Description": "Ingresa el nombre y el color del kit para el nuevo equipo",
        "NewTeamDialog.KitColor": "Color del kit",
        "NewTeamDialog.KitColorDescription": "El color de la kit del equipo",
        "NewTeamDialog.KitColorRequired": "Se requiere el color del kit",
        "NewTeamDialog.KitColorTitle": "Color del kit",
        "NewTeamDialog.TeamName": "Nombre",
        "NewTeamDialog.TeamNameRequired": "Se requiere el nombre del equipo",
        "NewTeamDialog.Title": "Neuvo equipo",
        "Overlay.Title": "Superposición de streaming",
        "Overlay.Clock.FinalScore": "Puntuación final",
        "Overlay.Clock.Intermission": "Descanso",
        "Overlay.Clock.Jam": "Jam",
        "Overlay.Clock.Lineup": "Alineación",
        "Overlay.Clock.OfficialReview": "Revisión oficial",
        "Overlay.Clock.OfficialTimeout": "Tiempo muerto oficial",
        "Overlay.Clock.Period": "Periodo",
        "Overlay.Clock.StartingSoon": "Empezando pronto...",
        "Overlay.Clock.TeamTimeout": "Tiempo muerto de equipo",
        "Overlay.Clock.Timeout": "Tiempo muerto",
        "Overlay.Clock.UnofficialScore": "Puntuación no oficial",
        "Overlay.Clock.Upcoming": "Empezando pronto",
        "Overlay.LineupRow.StarPassMarker": " (J)",
        "Overlay.ScoreRow.Away": "Visitante",
        "Overlay.ScoreRow.Home": "Local",
        "OverlaySettings.FillBackground": "Rellenar el fondo con color",
        "OverlaySettings.Language": "Idioma",
        "OverlaySettings.Scale": "Escala de superposición",
        "OverlaySettings.Title": "Configuraciónes de superposición",
        "RosterInput.AddSkater": "Añadir",
        "RosterTable.DeleteSkater": "Eliminar seleccionados",
        "RosterTable.DeleteSkaterDialog.Cancel": "Cancelar",
        "RosterTable.DeleteSkaterDialog.Confirm": "Eliminar",
        "RosterTable.DeleteSkaterDialog.Description": "¿Estás seguro de que deseas eliminar les patinadores seleccionados? Esta acción no se puede deshacer.",
        "RosterTable.DeleteSkaterDialog.Title": "Eliminar les patinadores",
        "RosterInput.Name": "Nombre",
        "RosterInput.Number": "Número",
        "RosterInput.NumberExists": "Ya existe un patinadore con ese número",
        "RosterInput.NumberInvalid": "El número de une patinadore debe tener entre 1 y 4 dígitos",
        "RosterInput.NumberMissing": "Une patinadore debe tener un número",
        "RosterInput.PasteRosterTip": "Consejo: puedes pegar listas completas para ingresar varias filas a la vez",
        "RosterTable.Name": "Nombre",
        "RosterTable.NoSkaters": "La lista está vacía",
        "RosterTable.Number": "Número",
        "RosterTable.NumberSymbol": "#",
        "Scoreboard.ConnectionLost": "Conexión perdida",
        "Scoreboard.IntermissionDetails.FinalScore": "Puntuación final",
        "Scoreboard.IntermissionDetails.Intermission": "Descanso",
        "Scoreboard.IntermissionDetails.TimeToDerby": "Tiempo hasta derby",
        "Scoreboard.IntermissionDetails.UnofficialScore": "Puntuación no oficial",
        "Scoreboard.JamDetails.Jam": "Jam",
        "Scoreboard.JamDetails.Period": "Periodo",
        "Scoreboard.LineupDetails.Jam": "Jam",
        "Scoreboard.LineupDetails.Lineup": "Alineación",
        "Scoreboard.LineupDetails.Period": "Periodo",
        "Scoreboard.TeamDetails.StarPassInicator": "PE",
        "Scoreboard.TimeoutDetails.Jam": "Jam",
        "Scoreboard.TimeoutDetails.OfficialReview": "Revisión oficial",
        "Scoreboard.TimeoutDetails.OfficialTimeout": "Tiempo muerto oficial",
        "Scoreboard.TimeoutDetails.Period": "Periodo",
        "Scoreboard.TimeoutDetails.TeamTimeout": "Tiempo muerto de equipo",
        "Scoreboard.TimeoutDetails.Timeout": "Tiempo muerto",
        "Scoreboard.Title": "Marcador",
        "ScoreboardControl.SettingsMenu.Inputs": "Atajos",
        "ScoreboardControl.SettingsMenu.Settings": "Configuración del juego",
        "ScoreboardControl.SettingsMenu.Timeline": "Cronología",
        "ScoreboardControl.ShortcutConfigurationDialog.Description": "Configurar atajos de teclado para controles comunes",
        "ScoreboardControl.ShortcutConfigurationDialog.Title": "Atajos",
        "ScoreboardControl.Title": "Control",
        "ScoreboardSettings.Language": "Idioma",
        "ScoreboardSettings.ShowSidebars": "Mostrar barras laterales de colores del equipo",
        "ScoreboardSettings.Title": "Configuración de pantalla",
        "ScoreboardSettings.UseTextBackgrounds": "Utilice los colores del equipo para mostrar el nombre",
        "ScoreSheetContainer.Header": "Hoja de puntuación",
        "Shortcut.clocks": "Relojes",
        "Shortcut.clocks.start": "Iniciar jam",
        "Shortcut.clocks.stop": "Terminar jam/tiempo muerto/periodo",
        "Shortcut.clocks.timeout": "Nuevo tiempo muerto",
        "Shortcut.clocks.undo": "Deshacer",
        "Shortcut.homeScore": "Puntuación local",
        "Shortcut.homeScore.decrementScore": "Puntuación -1",
        "Shortcut.homeScore.incrementScore": "Puntuación +1",
        "Shortcut.homeScore.setTripScoreUnknown": "Establecer la puntuación del recorrido como desconocida (-)",
        "Shortcut.homeScore.setTripScore0": "Establecer la puntuación del recorrido como 0",
        "Shortcut.homeScore.setTripScore1": "Establecer la puntuación del recorrido como 1",
        "Shortcut.homeScore.setTripScore2": "Establecer la puntuación del recorrido como 2",
        "Shortcut.homeScore.setTripScore3": "Establecer la puntuación del recorrido como 3",
        "Shortcut.homeScore.setTripScore4": "Establecer la puntuación del recorrido como 4",
        "Shortcut.awayScore": "Puntuación visitante",
        "Shortcut.awayScore.decrementScore": "Puntuación -1",
        "Shortcut.awayScore.incrementScore": "Puntuación +1",
        "Shortcut.awayScore.setTripScoreUnknown": "Establecer la puntuación del recorrido como desconocida (-)",
        "Shortcut.awayScore.setTripScore0": "Establecer la puntuación del recorrido como 0",
        "Shortcut.awayScore.setTripScore1": "Establecer la puntuación del recorrido como 1",
        "Shortcut.awayScore.setTripScore2": "Establecer la puntuación del recorrido como 2",
        "Shortcut.awayScore.setTripScore3": "Establecer la puntuación del recorrido como 3",
        "Shortcut.awayScore.setTripScore4": "Establecer la puntuación del recorrido como 4",
        "Shortcut.homeStats": "Estadísticas local",
        "Shortcut.homeStats.lead": "Alternar líder",
        "Shortcut.homeStats.lost": "Alternar líder perdida",
        "Shortcut.homeStats.called": "Alternar corte",
        "Shortcut.homeStats.starPass": "Alternar pase de estrella",
        "Shortcut.homeStats.initialTrip": "Alternar recorrido inicial",
        "Shortcut.awayStats": "Estadísticas visitantes",
        "Shortcut.awayStats.lead": "Alternar líder",
        "Shortcut.awayStats.lost": "Alternar líder perdida",
        "Shortcut.awayStats.called": "Alternar corte",
        "Shortcut.awayStats.starPass": "Alternar pase de estrella",
        "Shortcut.awayStats.initialTrip": "Alternar recorrido inicial",
        "ShortcutButton.Shortcut": "Atajo",
        "TeamColors.Title": "Colores",
        "TeamDetails.ColorName": "Nombre del color",
        "TeamDetails.ColorSection": "Color",
        "TeamDetails.LeagueName": "Nombre de la liga",
        "TeamDetails.OverlayName": "Nombre en la superposición",
        "TeamDetails.ScoreboardName": "Nombre en el marcador",
        "TeamDetails.ComplementaryColor": "Color complementario",
        "TeamDetails.ShirtColor": "Color del kit",
        "TeamDetails.SkatersSection": "Patinadores",
        "TeamDetails.TeamName": "Nombre de equipo",
        "TeamDetails.TeamSection": "Equipo",
        "TeamEdit.Teams": "Equipos",
        "TeamEdit.Title": "Editar el equipo",
        "TeamLineup.Jammer": "Jammer",
        "TeamLineup.Pivot": "Pivot",
        "TeamsManagement.AddTeam": "Añadir equipo",
        "TeamsManagement.DeleteTeam": "Eliminar seleccionados",
        "TeamsManagement.DeleteTeamDialog.Cancel": "Cancelar",
        "TeamsManagement.DeleteTeamDialog.Confirm": "Eliminar",
        "TeamsManagement.DeleteTeamDialog.Description": "¿Está seguro de que desea eliminar los equipos seleccionados? Esta acción no se puede deshacer.",
        "TeamsManagement.DeleteTeamDialog.Title": "Eliminar equipos",
        "TeamsManagement.Title": "Equipos",
        "TeamNames.LeagueName": "Nombre de la liga",
        "TeamNames.OverlayName": "Nombre en la superposición",
        "TeamNames.ScoreboardName": "Nombre en el marcador",
        "TeamNames.TeamName": "Nombre del equipo",
        "TeamNames.Title": "Nombres",
        "TeamRoster.Title": "Lista",
        "TeamTable.LastUpdated": "Última actualización en",
        "TeamTable.LeagueName": "Nombre de la liga",
        "TeamTable.NoResults": "No hay resultados",
        "TeamTable.TeamName": "Nombre del equipo",
        "ThemeMenu.Dark": "Oscuro",
        "ThemeMenu.Light": "Claro",
        "ThemeMenu.System": "Sistema predeterminado",
        "ThemeMenu.Title": "Tema",
        "TimeoutType.HomeTeam": "Tiempo muerto local",
        "TimeoutType.HomeTeamReview": "Revisión oficial local",
        "TimeoutType.Official": "Tiempo muerto oficial",
        "TimeoutType.AwayTeam": "Tiempo muerto visitante",
        "TimeoutType.AwayTeamReview": "Revisión oficial visitante",
        "TripStats.Call": "Corte",
        "TripStats.InitialComplete": "Recorrido inicial",
        "TripStats.Lead": "Líder",
        "TripStats.Lost": "Líder perdida",
        "TripStats.StarPass": "Pase de estrella",
        "TripScore.TripScore": "Puntuación del recorrido",
        "UploadDialog.Cancel": "Cancelar",
        "UploadDialog.Description": "Elija un libro de estadísticas de la WFTDA para crear un juego",
        "UploadDialog.FileRequired": "Se debe proporcionar un archivo",
        "UploadDialog.InvalidFileFormat": "El archivo no es un libro de estadísticas WFTDA válido",
        "UploadDialog.Title": "Subir libro de estadísticas",
        "UploadDialog.Upload": "Subir",
        "UserMenu.Login": "Acceso",
        "UserMenu.Logout": "Cerrar sesión",
        "UserMenu.Welcome": "Hola, {userName}",
        "UsersManagement.Title": "Usuaries",
        "UsersManagement.Import": "Importar usuaries",
        "UsersManagement.Export": "Exportar seleccionados",
        "UsersManagement.DeleteUser": "Eliminar seleccionados",
        "UsersManagement.DeleteUserDialog.Cancel": "Cancelar",
        "UsersManagement.DeleteUserDialog.Confirm": "Eliminar",
        "UsersManagement.DeleteUserDialog.Description": "¿Está seguro de que desea eliminar los usuarios seleccionados? Esta acción no se puede deshacer.",
        "UsersManagement.DeleteUserDialog.Title": "Eliminar usaries",
        "UsersManagement.UserTable.NoResults": "No hay usaries",
        "UsersManagement.UserTable.UserName": "Nombre",
        "ViewMenu.AwayTeam": "Equipo visitante",
        "ViewMenu.BothTeams": "Ambos equipos ",
        "ViewMenu.ClockControls": "Controles del reloj",
        "ViewMenu.Clocks": "Relojes",
        "ViewMenu.FullScreen": "Pantalla completa",
        "ViewMenu.HomeTeam": "Equipo local",
        "ViewMenu.JamTimerPreset": "Temporizador de jam",
        "ViewMenu.LineupControls": "Controles de alineación",
        "ViewMenu.Presets": "Preajustes",
        "ViewMenu.ScoreboardPreset": "Operador de marcador",
        "ViewMenu.ScoreControls": "Controles del marcador",
        "ViewMenu.ScorekeeperPreset": "Tanteador",
        "ViewMenu.ScoreSheet": "Hoja de puntuación",
        "ViewMenu.StatsControls": "Controles de estadísticas",
        "ViewMenu.Timeouts": "Tiempos muertos",
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