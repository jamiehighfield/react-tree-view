import { ITreeNodeData } from "./ITreeNodeData";
import { ITreeNodeProperties } from "./ITreeNodeProperties";
import { ITreeNodeState } from "./ITreeNodeState";

export interface ITreeNodeInformation {
    id: number;
    node: ITreeNodeData;
    state: ITreeNodeState;
    children: ITreeNodeInformation[];
    properties?: ITreeNodeProperties;
}