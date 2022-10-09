import { ITreeNodeData } from "../data/ITreeNodeData";
import { Color } from "../Utilities/Color";

export interface ITreeViewComponentState {
    selectedChildren: ITreeNodeData[];

    nonInteractive: boolean;

    mouseDown: boolean;
    selectionVisible: boolean;
    selectionStartX: number;
    selectionStartY: number;
    selectionEndX: number;
    selectionEndY: number;
}