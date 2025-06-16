import { Janitor } from "@rbxts/janitor";
import { IManipulator } from "./manipulator";
import { Logger } from "@rbxts/comet";
import { Players, RunService, UserInputService } from "@rbxts/services";

export class DragManipulator implements IManipulator {
    private _janitor = new Janitor();
    private dragging = false;
    private mouse = Players.LocalPlayer.GetMouse();
    private lastMousePosition = Vector2.zero;

    private targetPosition : UDim2 = UDim2.fromOffset(0,0);
    private source! : GuiButton;
    private target! : GuiObject;

    attach(source : GuiButton , target : GuiObject) {
        if (!source.IsA("GuiButton")) {Logger.warn("DragManipulator: The source is not a button, cannot attach"); return}

        this.source = source;
        this.target = target;
        this.targetPosition = target.Position;

        this._janitor.Add(source.MouseButton1Down.Connect(() => this.dragging = true))
        this._janitor.Add(UserInputService.InputEnded.Connect((obj) => {
            if (obj.UserInputType !== Enum.UserInputType.MouseButton1) return
            this.dragging = false
        }))

        this._janitor.Add(RunService.RenderStepped.Connect(() => {
            const mousePosition = new Vector2(this.mouse.X, this.mouse.Y);
            if (this.dragging) {
                const delta = mousePosition.sub(this.lastMousePosition);
                this.targetPosition = this.targetPosition.add(UDim2.fromOffset(delta.X, delta.Y));
            }
            
            const currentPos = this.target.Position;
            const newPosition = currentPos.Lerp(this.targetPosition, 0.23);

            this.target.Position = newPosition;
            this.lastMousePosition = mousePosition;
        }))
    }

    detach() {
        this._janitor.Destroy();
    }
}