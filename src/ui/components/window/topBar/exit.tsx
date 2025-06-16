import { useChroma } from "@rbxts/chroma";
import React from "@rbxts/react";
import { Assets } from "assets";
import { appThemes } from "themes";

export interface ExitProps {
    onClick : () => void,
    position? : UDim2
    anchorPoint? : Vector2
    size? : UDim2
}
export default function ExitButton({
    onClick,
    position = new UDim2(1, -20, 0, 0),
    anchorPoint = new Vector2(1, 0),
    size = new UDim2(0, 20, 0, 20)
} : ExitProps) {
    const {theme} = useChroma<typeof appThemes>();
    return (
        <imagebutton
            Image={Assets.Images.Exit}
            BackgroundTransparency={1}
            ImageColor3={theme.text}
            ImageTransparency={.15}
            Size={size}
            AnchorPoint={anchorPoint}
            Position={position}
            ZIndex={100}
            Event={{
                MouseButton1Click : onClick
            }}
        />
    )
}