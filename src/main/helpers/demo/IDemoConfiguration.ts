import { AfterNodeExpandedDelegate, BeforeNodeExpandDelegate } from "../../components/ITreeNodeComponentState";
import { ClickBehavior, NodeSelectDelegate } from "../../components/ITreeViewProps";
import { ITreeNodeInformation } from "../../data/ITreeNodeInformation";
import { FullRowSelectionModes } from "../../rendering/LayoutOptions";
import { Padding } from "../../Utilities/Padding";
import { Radius } from "../../Utilities/Radius";

export interface IDemoConfiguration {
    id: number;
    name: string;
    helpContent?: JSX.Element | string | null;

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
    overlay: boolean;

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
    onLoadDemo?: LoadDemoDelegate;
    onBeforeNodeExpand?: BeforeNodeExpandDelegate;
    onAfterNodeExpand?: AfterNodeExpandedDelegate;
    onBeforeNodeSelect?: NodeSelectDelegate;
    onAfterNodeSelect?: NodeSelectDelegate;

    // Children
    imageElement: DemoElementDelegate;
    contentElement: DemoElementDelegate;
    actionsElement: DemoElementDelegate;
}

export interface LoadDemoDelegate {
    (): Promise<any>;
}

export interface DemoElementDelegate {
    (nodeInformation: ITreeNodeInformation): JSX.Element;
}