import { Janitor } from "@rbxts/janitor";
import { Players, RunService } from "@rbxts/services";
import { IManipulator } from "./manipulator";

export type ResizeEdge =
	| "Left"
	| "Right"
	| "Top"
	| "Bottom"
	| "TopLeft"
	| "TopRight"
	| "BottomLeft"
	| "BottomRight";

interface ResizableManipulatorOptions {
	edge: ResizeEdge;
	minSize?: UDim2;
	maxSize?: UDim2;
}

export class ResizeManipulator implements IManipulator {
	private janitor = new Janitor();
	private dragging = false;
	private mouse = Players.LocalPlayer.GetMouse();
	private lastMousePos = Vector2.zero;
	private options: ResizableManipulatorOptions = { edge: "Right" };

	constructor(options: ResizableManipulatorOptions) {
		this.options = options;
	}

	attach(source: GuiObject, target: GuiObject) {
		this.janitor.Add(source.InputBegan.Connect((input) => {
			if (input.UserInputType === Enum.UserInputType.MouseButton1) {
				this.dragging = true;
				this.lastMousePos = new Vector2(this.mouse.X, this.mouse.Y);
			}
		}));

		this.janitor.Add(source.InputEnded.Connect((input) => {
			if (input.UserInputType === Enum.UserInputType.MouseButton1) {
				this.dragging = false;
			}
		}));

		this.janitor.Add(RunService.RenderStepped.Connect(() => {
			if (!this.dragging) return;

			const currentMouse = new Vector2(this.mouse.X, this.mouse.Y);
			const delta = currentMouse.sub(this.lastMousePos);
			this.lastMousePos = currentMouse;

			const size = target.Size;
			let newX = size.X.Offset;
			let newY = size.Y.Offset;

			const { edge, minSize, maxSize } = this.options;

	
			if (edge.match("Right")) newX += delta.X;
			if (edge.match("Left")) newX -= delta.X;
			if (edge.match("Bottom")) newY += delta.Y;
			if (edge.match("Top")) newY -= delta.Y;

		
			if (minSize) {
				newX = math.max(newX, minSize.X.Offset);
				newY = math.max(newY, minSize.Y.Offset);
			}
			if (maxSize) {
				newX = math.min(newX, maxSize.X.Offset);
				newY = math.min(newY, maxSize.Y.Offset);
			}

			target.Size = new UDim2(size.X.Scale, newX, size.Y.Scale, newY);
		}));
	}

	detach() {
		this.janitor.Destroy();
	}
}
