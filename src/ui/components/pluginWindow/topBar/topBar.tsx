import { useChroma } from "@rbxts/chroma";
import React from "@rbxts/react"
import { appThemes } from "themes";
import Title from "../title";
export default function() {
    const {theme} = useChroma<typeof appThemes>();
    return (
        <frame Size={new UDim2(1, 0, 0, 25)} BackgroundColor3={theme.overlay}>
            <Title/>
        </frame>
    )
}
