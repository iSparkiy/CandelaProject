import { OnInit, System } from "@rbxts/comet";
import React from "@rbxts/react";
import { windowAtoms, WindowInstance} from "data/windowAtoms";
import pluginWindow from "ui/components/pluginWindow";
import { PluginWindow } from "ui/windows/pluginWindow";

@System()
export class WindowsSystem implements OnInit {
    onInit() {
        print("windows system initialized")
        this.openWindow(PluginWindow)
    }

    public openWindow(window : () => React.ReactElement) {
        const id = windowAtoms().size() + 1;
        windowAtoms([...windowAtoms(), {id, component : window}])
    }
}