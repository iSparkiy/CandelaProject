import { useChroma } from "@rbxts/chroma";
import React from "@rbxts/react";
import { appThemes } from "themes";
import TopBar from "./pluginWindow/topBar/topBar";

export default function() {
    const {theme} = useChroma<typeof appThemes>();
    return (
        <canvasgroup Size={new UDim2(1,-1,1,-1)} BorderSizePixel={0} BackgroundColor3={theme.base} BackgroundTransparency={0}>
            <uistroke Thickness={1} Color={theme.outline} Transparency={.3}/>
            <uicorner CornerRadius={new UDim(0, 6)}/>

            <TopBar/>
        </canvasgroup>
    )
}