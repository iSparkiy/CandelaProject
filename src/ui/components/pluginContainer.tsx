import { useChroma } from "@rbxts/chroma";
import React, { ReactElement, ReactNode } from "@rbxts/react";
import { appThemes } from "themes";

export default function(props : React.PropsWithChildren) {
    return (
        <frame
            Size = {new UDim2(0, 400, 1, -10)} 
            AnchorPoint={new Vector2(1, .5)} 
            Position={new UDim2(1, -5, .5, 0)}
            BackgroundTransparency={1}
        >
        {props.children}
        </frame>
    )
}