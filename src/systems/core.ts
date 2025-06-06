import { Button, Dependency, GUI, Logger, OnInit, OnStart, System, View } from "@rbxts/comet";
import { Assets } from "assets";
import { mountUi } from "ui/entry";

@System()
export class CoreSystem implements OnStart{
    private gui = Dependency(GUI);
    public Button : Button;
    public View : View;
    constructor(){
        this.Button = this.gui.createButton("Candela", "Open Candela VFX Graph", Assets.Images.PluginLogo, true, false);
        this.View = this.gui.createOverlay("Candela Graph")
        this.View.container.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
    }

    public onStart(): void {
        Logger.verbose("Core System Initialized")
        this.View.linkButton(this.Button);
        this.View.mount(mountUi);
    }
}