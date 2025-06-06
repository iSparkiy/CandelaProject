import { ChromaProvider } from "@rbxts/chroma"
import React from "@rbxts/react"
import { appThemes } from "themes"
import PluginContainer from "./components/pluginContainer"
import PluginUi from "./components/pluginUi"

export default function() {
    return (
        <ChromaProvider theme = {appThemes} currentTheme={"mocha"}>
            <PluginContainer>
                <PluginUi>
                    
                </PluginUi>
            </PluginContainer>
        </ChromaProvider>
    )
}