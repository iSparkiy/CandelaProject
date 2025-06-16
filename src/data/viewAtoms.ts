import { atom } from "@rbxts/charm"
import { View } from "@rbxts/comet"

export type ViewOptions = Map<string, string>

export const viewAtoms = {
    Title : atom<string>(""),
    ViewOptions : atom<ViewOptions>()
}