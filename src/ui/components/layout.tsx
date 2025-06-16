import React from "@rbxts/react"
export default function Layout(props : React.PropsWithChildren) {
    return (
        <frame Size={new UDim2(1, 0, 1, 0)} BackgroundTransparency={1} BorderSizePixel={0}>
            {props.children}
        </frame>
    )
}