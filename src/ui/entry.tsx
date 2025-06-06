import React, { ReactNode, StrictMode } from "@rbxts/react"
import ReactRoblox, { createPortal, createRoot } from "@rbxts/react-roblox"
import App from "./app";
export function mountUi(parent : Instance) {
    const root = createRoot(parent);
    root.render(
        <StrictMode>
            {createPortal(<App/>, parent)}
        </StrictMode>
    )
    return () => root.unmount()
}