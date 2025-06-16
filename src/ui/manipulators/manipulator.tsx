import React, { useEffect, useLayoutEffect, useRef } from "@rbxts/react";
interface ManipulatorProps {
    manipulators : IManipulator[],
    targetRef? : React.RefObject<GuiObject>,
    children : React.ReactElement
}

export interface IManipulator {
    attach(source : GuiObject, target : GuiObject) : void
    detach() : void
}

export default function Manipulator({
    manipulators,
    targetRef,
    children
} : ManipulatorProps) {
    
    const sourceRef = useRef()

    useEffect(() => {
        const source = sourceRef.current;
        const target = targetRef?.current ?? source!;
        
        if (!source) return;

        manipulators.forEach(manipulator => manipulator.attach(source, target));
        return () => manipulators.forEach(manipulator => manipulator.detach());
    }, [manipulators, targetRef]);

    return React.cloneElement(children, {ref : sourceRef});
}