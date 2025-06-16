import { atom, Atom } from "@rbxts/charm"
import React from "@rbxts/react"

export interface WindowInstance {
    id : number,
    component : () => React.ReactElement
}

export const windowAtoms = atom<WindowInstance[]>([])