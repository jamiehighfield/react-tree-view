import { ITreeNodeInformation } from "../data/ITreeNodeInformation";
import { IDemoConfiguration } from "../helpers/demo/IDemoConfiguration";

export interface IDemoComponentState {
    demoConfiguration?: IDemoConfiguration | null;
    navigationItems: ITreeNodeInformation[];
    selectedPage: number;
    informationModalVisible: boolean;
    informationModalTitle: string;
    informationModalHelpContent?: JSX.Element | string | null;
}