import React from "@rbxts/react";
import Window from "ui/components/window/window";
import { viewAtoms } from "data/viewAtoms";
import { useAtom } from "@rbxts/react-charm";

export function PluginWindow() {
    const viewTitle = useAtom(viewAtoms.Title); 
    return (
        <Window title={viewTitle} size={new UDim2(0, 400, 1, -20)} position={new UDim2(1, -10, .5, 0)} anchorPoint={new Vector2(1, 0.5)} canClose={false}>

        </Window>
    )
}