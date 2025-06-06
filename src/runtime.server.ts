import { Comet, LogLevel } from "@rbxts/comet"

Comet.createApp("Candela");
Comet.addPaths(script.Parent?.WaitForChild("systems"));
Comet.configureLogger(LogLevel.VERBOSE)
Comet.launch();