import { atom } from "@rbxts/charm";
import { OnStart, System } from "@rbxts/comet";
import { about } from "about";
import { viewAtoms } from "data/viewAtoms";

@System()
export class ViewSystem implements OnStart{
    public get Title() {return viewAtoms.Title()}
    public set Title(value : string) {viewAtoms.Title(value)}

    public onStart(): void {
        this.Title = `Candela v${about.version}`; //about.version;
    }
}