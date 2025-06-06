import { atom } from "@rbxts/charm";
import { System } from "@rbxts/comet";
import { about } from "about";
import { viewAtoms } from "data/viewAtoms";

@System()
export class ViewSystem {

    constructor() {

    }

    private setTitle(title : string) {
        viewAtoms.Title(title)
    }
}