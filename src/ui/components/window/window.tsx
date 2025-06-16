import React from "@rbxts/react";
import WindowTopBar from "./topBar/topBar";
import { useChroma } from "@rbxts/chroma";
import { appThemes } from "themes";
import WindowShadow from "./windowShadow";
import Manipulator from "ui/manipulators/manipulator";
import { DragManipulator } from "ui/manipulators/dragManipulator";
import { ResizeManipulator } from "ui/manipulators/resizeManipulator";

interface WindowProps {
    size? : UDim2,
    title? : string,
    position? : UDim2,
    anchorPoint? : Vector2,
    canClose? : boolean
}

export default function Window({
    children,
    size,
    title = "New Window",
    position = new UDim2(0.5, 0, 0.5, 0),
    anchorPoint = new Vector2(0.5, 0.5),
    canClose = true
} : React.PropsWithChildren<WindowProps>) {
    
    const {theme} = useChroma<typeof appThemes>();
    const windowRef = React.useRef<Frame>();

    return (
        <frame Size={size} BackgroundTransparency={1} BorderSizePixel={0} AnchorPoint={anchorPoint} Position={position} ref={windowRef}>
            <WindowShadow/>

            <frame Size={UDim2.fromScale(1,1)} BackgroundTransparency={0} BackgroundColor3={theme.background}>
                <uicorner CornerRadius={new UDim(0, 8)}/>
                <uistroke Thickness={1} Color={theme.primary}/>

                <Manipulator manipulators={[new DragManipulator()]} targetRef={windowRef}><WindowTopBar title={title} canClose={canClose}/></Manipulator>
 
                <frame Size={new UDim2(1, 0, 1, -22)} AnchorPoint={new Vector2(0, 1)} Position={new UDim2(0, 0, 1, 0)} ClipsDescendants={true}  BackgroundTransparency={1}>
                    {children}
                </frame>

            </frame>
        </frame>
    )
}