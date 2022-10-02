import { ITreeNodeProps } from "./ITreeNodeProps";
import TreeNode from "./TreeNode";

export default class RootTreeNode extends TreeNode {
    constructor(props: ITreeNodeProps) {
        props.rootNode = true;

        super(props);
    }
}