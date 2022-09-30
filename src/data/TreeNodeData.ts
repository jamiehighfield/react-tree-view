import { ITreeNodeData } from "./ITreeNodeData";

export class TreeNodeData implements ITreeNodeData {
    additionalData: any;
    children: ITreeNodeData[];
}