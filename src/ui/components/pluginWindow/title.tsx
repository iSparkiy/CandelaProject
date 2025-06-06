import { Dependency } from "@rbxts/comet";
import React from "@rbxts/react";
import { useAtom } from "@rbxts/react-charm";
import { viewAtoms } from "data/viewAtoms";

export default function() {
    const titleName = useAtom(viewAtoms.Title);

    return (
        <frame Size={UDim2.fromScale(1,1)} BackgroundTransparency={1}>
            <uilistlayout/>
            <textlabel Text = {titleName} TextSize ={20} TextXAlignment = {Enum.TextXAlignment.Left}/>
        </frame>
    )
}