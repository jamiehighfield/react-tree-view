import { ReactNode } from "react";
import { ITreeNodeData } from "../data/ITreeNodeData";
import { ITreeNodeInformation } from "../data/ITreeNodeInformation";
import { TreeNodeInformation } from "../helpers/TreeNodeInformation";
import { IRenderer } from "../rendering/IRenderer";
import { FullRowSelectionModes, LayoutOptions } from "../rendering/LayoutOptions";
import { Padding } from "../Utilities/Padding";
import { Radius } from "../Utilities/Radius";
import { AfterNodeExpandedDelegate, BeforeNodeExpandDelegate } from "./ITreeNodeComponentState";
import { ClickBehavior, NodeSelectDelegate, SelectionBehavior } from "./ITreeViewProps";
import TreeView from "./TreeView";

export interface ITreeNodeProps {

    // Appearance
    elementOuterPadding?: Padding;
    elementInnerPadding?: Padding;
    imagePadding?: Padding;
    textPadding?: Padding;
    borderRadius?: Radius;
    fullRowSelectionMode?: FullRowSelectionModes;
    showCheckBoxes?: boolean;
    showImages?: boolean;
    showChevrons?: boolean;
    showActions?: boolean;
    indent?: number;
    gridLines?: boolean;
    overlay?: boolean;

    // Behavior
    useWaitCursor?: boolean;
    nonSelectable?: boolean;
    clickBehavior?: ClickBehavior,
    uniqueSelection?: boolean;
    autoHideActions?: boolean;
    showActionsOnNodeHover?: boolean;
    autoCheck?: boolean;
    disableDeselection?: boolean;







    node: TreeNodeInformation,



    

    level?: number,
    
    onBeforeNodeExpand?: BeforeNodeExpandDelegate,
    onAfterNodeExpand?: AfterNodeExpandedDelegate,
    onBeforeNodeSelect?: NodeSelectDelegate;
    onAfterNodeSelect?: NodeSelectDelegate;

    
    children: ReactNode,

    id: number;

    // Data
    data: ITreeNodeInformation;

    // Chevrons
    showShevrons?: boolean;
    chevronsOutsideNode?: boolean;

    // Check boxes
    checkOnClick?: boolean;
    checkBoxesOutsideNode: boolean;
    isChecked: boolean;
    isIndeterminate?: boolean;
    onCheckChanged?: CheckChangedDelegate;


    // Callbacks
    onSelectionChanged: SelectionChangedDelegate;

    // Miscellaneous
    rootNode: boolean;
    visible: boolean;
    parentExpanded: boolean;

    
    treeView: TreeView;
}

export interface SelectionChangedDelegate {
    (nodeInformation: ITreeNodeInformation): void;
}

export interface CheckChangedDelegate {
    (nodeInformation: ITreeNodeInformation, checked: boolean): void;
}