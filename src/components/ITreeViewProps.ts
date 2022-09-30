import { CSSProperties } from "react";
import TreeView from "./TreeView";
import { Padding } from "../Utilities/Padding";
import { IRenderer } from "../rendering/IRenderer";
import { FullRowSelectionModes, LayoutOptions } from "../rendering/LayoutOptions";
import { ReactNode } from "react";
import { ITreeNodeData } from "../data/ITreeNodeData";
import { AfterNodeExpandedDelegate, BeforeNodeExpandDelegate } from "./ITreeNodeComponentState";
import { ITreeNodeInformation } from "../data/ITreeNodeInformation";
import { Radius } from "../Utilities/Radius";

export interface ITreeViewProps {

    // Appearance
    elementOuterPadding: Padding;
    elementInnerPadding: Padding;
    imagePadding: Padding;
    textPadding: Padding;
    borderRadius: Radius;
    fullRowSelectionMode: FullRowSelectionModes;
    showCheckBoxes: boolean;
    showImages: boolean;
    showChevrons: boolean;
    showActions: boolean;
    indent: number;
    gridLines: boolean;

    // Behavior
    useWaitCursor: boolean;
    nonSelectable: boolean;
    clickBehavior: ClickBehavior,
    uniqueSelection: boolean;
    autoHideActions: boolean;
    showActionsOnNodeHover: boolean;
    autoCheck: boolean;

    // Data
    data: ITreeNodeInformation[];

    // Events
    onDataChange: DataChangeDelegate;
    onBeforeNodeExpand: BeforeNodeExpandDelegate;
    onAfterNodeExpanded: AfterNodeExpandedDelegate;




    // Other...

    children: ReactNode,


    // Behavior
    forcedSelection: boolean;

}

export enum SelectionBehavior {
    None = 0,
    SelectOnClick = 1,
    SelectOnCheck = 2,
    SelectOnClickAndCheck = SelectOnClick | SelectOnCheck
}
export enum ClickBehavior {
    None = 0,
    Select = 1,
    Check = 2,
    Expand = 4,
    SelectCheck = Select | Check
}

export interface DataChangeDelegate {
    (data: any): void;
}