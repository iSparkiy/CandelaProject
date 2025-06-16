import { useChroma } from "@rbxts/chroma";
import React, { ReactElement, ReactNode } from "@rbxts/react";
import { appThemes } from "themes";
import Window from "./window/window";
import Layout from "./layout";
import WindowManager from "./windowManager";

export default function(props : React.PropsWithChildren) {
    return (
        <Layout>
            <WindowManager/>
        </Layout>
    )
}