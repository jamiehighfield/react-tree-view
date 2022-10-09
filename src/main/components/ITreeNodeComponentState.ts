import { ITreeNodeData } from "../data/ITreeNodeData";
import { ITreeNodeInformation } from "../data/ITreeNodeInformation";
import { Color } from "../Utilities/Color";
import { SelectionBehavior } from "./ITreeViewProps";

export interface ITreeNodeComponentState {
    backgroundColor: Color,
    chevronColor: Color,

    indent: number,
    processing: boolean,

    // Node state
    isSelected: boolean;
    isChecked: boolean;
    isIndeterminate: boolean;
    isExpanded: boolean;
    isExpanding: boolean;
    disabled: boolean;
    selectedChildren: number[];

    // Chevron
    showChevrons: boolean;

    // Check boxes
    showCheckBoxes: boolean,
    checkOnClick: boolean,

    // Images
    showImages: boolean

    // Behavior


    
    overlay?: boolean;
}

export interface BeforeNodeExpandDelegate {
    (nodeInformation: ITreeNodeInformation): Promise<any>
}
export interface AfterNodeExpandedDelegate {
    (nodeInformation: ITreeNodeInformation): Promise<any>
}