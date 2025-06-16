import React from "@rbxts/react";
import { Assets } from "assets";

export default function WindowShadow() {
    return (
        <imagelabel 
            Image={Assets.Images.Shadow1}
            BackgroundTransparency={1}
            ImageColor3={new Color3(0,0,0)}
            ImageTransparency={.2}
            Size={new UDim2(1, 82, 1, 82)}
            AnchorPoint={new Vector2(0.5, 0.5)}
            Position={new UDim2(0.5, 0, 0.5, 0)}
        />
    )
}