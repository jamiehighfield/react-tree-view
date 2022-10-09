import { ITreeNodeInformation } from "../data/ITreeNodeInformation";

export interface IDemoNavigationComponentProps {
    navigationItems: ITreeNodeInformation[];

    onBeforeDemoConfigurationChanged?: DemoChangeDelegate;
    onAfterDemoConfigurationChanged?: DemoChangeDelegate;

    onDemoInformationActionClicked: DemoInformationActionClicked;
}

export interface DemoChangeDelegate {
    (nodeInformation: ITreeNodeInformation): Promise<any>;
}

export interface DemoInformationActionClicked {
    (nodeInformation: ITreeNodeInformation): void;
}