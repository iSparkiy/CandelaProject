import { ChromaProvider } from "@rbxts/chroma"
import React from "@rbxts/react"
import { appThemes } from "themes"
import PluginContainer from "./components/pluginWindow"
import PluginWindow from "./components/pluginWindow"

export default function() {
    return (
        <ChromaProvider theme = {appThemes} currentTheme={"mismagius"} >
            <PluginWindow/>
        </ChromaProvider>
    )
}
