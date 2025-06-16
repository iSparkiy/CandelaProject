import React, { Fragment } from "@rbxts/react";
import Layout from "./layout";
import { useAtom } from "@rbxts/react-charm";
import { windowAtoms, WindowInstance} from "data/windowAtoms";
import { func } from "@rbxts/react/src/prop-types";

// Window Context
interface windowContext {
    openWindow : (comp : () => React.ReactElement) => void
}
export const WindowContext = React.createContext<windowContext>(undefined!);

// Window Instance Context
interface windowInstanceContext {
    closeWindow : (id : number) => void
}
export const WindowInstanceContext = React.createContext<windowInstanceContext>(undefined!);


// Manager
export default function WindowManager() {
    const windows = useAtom(windowAtoms);
    function openWindow(comp : () => React.ReactElement) {
        const id = windowAtoms().size() + 1;
        windowAtoms([...windowAtoms(), {id, component : comp}])
    }

    function closeWindow(id : number) {
        windowAtoms(windows.filter((window) => window.id !== id));
    }

    return (
        <WindowContext.Provider value={{openWindow}}>
            <Fragment>
                {windows.map((window) => {
                    return (
                        <WindowInstanceContext.Provider value = {{closeWindow : () => closeWindow(window.id)}}>
                            <window.component key={window.id} />
                        </WindowInstanceContext.Provider>
                    )
                })}
            </Fragment>
        </WindowContext.Provider>
    )
}