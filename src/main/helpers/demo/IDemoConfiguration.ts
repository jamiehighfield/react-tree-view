import { ClickBehavior } from "../../components/ITreeViewProps";
import { ITreeNodeInformation } from "../../data/ITreeNodeInformation";
import { FullRowSelectionModes } from "../../rendering/LayoutOptions";
import { Padding } from "../../Utilities/Padding";
import { Radius } from "../../Utilities/Radius";

export interface IDemoConfiguration {
    id: number;

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
}