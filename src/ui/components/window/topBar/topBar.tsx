import { useChroma } from "@rbxts/chroma";
import React from "@rbxts/react";
import { Assets } from "assets";
import { appThemes } from "themes";
import ExitButton from "./exit";

interface WindowTopBarProps {
    title : string,
    canClose? : boolean,
}
const WindowTopBar = React.forwardRef<TextButton, WindowTopBarProps>(({
    title,
    canClose = true
}, ref) => {
    const {theme} = useChroma<typeof appThemes>();
    return (
        <frame Size={new UDim2(1, 0, 0, 22)} AnchorPoint={new Vector2(0.5, 0)} Position={new UDim2(0.5, 0, 0, 0)} BackgroundColor3={theme.section}>
            <uicorner CornerRadius={new UDim(0, 8)}/>
            <frame BorderSizePixel={0} AnchorPoint={new Vector2(0, 1)} Position={new UDim2(0, 0, 1, 0)} BackgroundColor3={theme.section} Size={new UDim2(1, 0, .5, 0)}/>

            <textbutton BackgroundTransparency={1} AutoButtonColor={false} Text="" BorderSizePixel={0} Size={UDim2.fromScale(1, 1)}  ref={ref}>
                <textlabel 
                    Text={title}
                    TextSize={8.7}
                    TextColor3={theme.text}
                    Transparency={0.25}
                    Position={UDim2.fromScale(.5, .5)}
                    AnchorPoint={new Vector2(.5, .5)}
                />
            </textbutton>

            {
                canClose && <ExitButton 
                position={new UDim2(1, -5, 0.5, 0)}
                anchorPoint={new Vector2(1, 0.5)}
                size={UDim2.fromOffset(17,17)}
                onClick={() => {
                    print("clicked")
                }}  
            />
            }
        </frame>
        
    )
})



export default WindowTopBar