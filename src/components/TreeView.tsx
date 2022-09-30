import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import css from 'cease';
import './TreeView.scoped.scss'
import { ClickBehavior, ITreeViewProps } from './ITreeViewProps';
import Windows10Renderer from '../rendering/Windows10Renderer';
import { ITreeViewComponentState } from './ITreeViewComponentState';
import TreeNode from './TreeNode';
import { Padding } from '../Utilities/Padding';
import { TreeNodeInformation } from '../helpers/TreeNodeInformation';
import { ITreeNodeState } from '../data/ITreeNodeState';
import { ITreeNodeInformation } from '../data/ITreeNodeInformation';
import { ITreeNodeData } from '../data/ITreeNodeData';
import { FullRowSelectionModes } from '../rendering/LayoutOptions';


class TreeView extends React.Component<ITreeViewProps, ITreeViewComponentState> {
    constructor(props: ITreeViewProps) {
        super(props);

        this.state = {
            selectedChildren: []
        };

        this.handleSelectionChanged = this.handleSelectionChanged.bind(this);
    }

    /* Default property values. */
    public static defaultProps = {
        elementOuterPadding: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        elementInnerPadding: {
            top: 8,
            left: 0,
            bottom: 8,
            right: 8
        },
        imagePadding: {
            top: 6,
            left: 6,
            bottom: 6,
            right: 6
        },
        textPadding: {
            top: 6,
            left: 6,
            bottom: 6,
            right: 6
        },
        borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5
        },
        fullRowSelectionMode: FullRowSelectionModes.Level,
        showCheckBoxes: false,
        showImages: true,
        showChevrons: true,
        showActions: false,
        indent: 25,
        gridLines: false,

        useWaitCursor: true,
        nonSelectable: false,
        clickBehavior: ClickBehavior.Select,
        uniqueSelection: false,
        autoHideActions: true,
        showActionsOnNodeHover: true,
        autoCheck: false
    }

    /* Handles the selection of a node changing. */
    handleSelectionChanged(nodeInformation: ITreeNodeInformation): void {
        if (nodeInformation.state.isSelected) {
            if (!this.props.forcedSelection && this.state.selectedChildren.includes(nodeInformation.node)){
                this.setState((previousState) => {
                    let selectedChildren: ITreeNodeData[] = previousState.selectedChildren;

                    selectedChildren.splice(selectedChildren.indexOf(nodeInformation.node, 0), 1);

                    return {
                        selectedChildren: selectedChildren
                    }
                });
            }
        }
        else {
            this.setState((previousState) => {
                let selectedChildren: ITreeNodeData[] = previousState.selectedChildren;

                if (!selectedChildren.includes(nodeInformation.node)) {
                    selectedChildren.push(nodeInformation.node);
                }

                if (this.props.uniqueSelection) {
                    for (let node of selectedChildren) {
                        if (node != nodeInformation.node) {
                            selectedChildren.splice(selectedChildren.indexOf(node, 0), 1);
                        }
                    }
                }

                return {
                    selectedChildren: selectedChildren
                }
            });
        }
    }


    updateData() {
        // this.props.onDataChange(this.state.)
    }



    static Image = () => null;
    static Content = () => null;
    static Actions = () => null;


    render() {

        let node = new TreeNodeInformation("Jamie Highfield");

        let treeNodes: any[] = [];
        for (let child of this.props.data) {
            treeNodes.push(
            <TreeNode

                fullRowSelectionMode={this.props.fullRowSelectionMode}
                showCheckBoxes={this.props.showCheckBoxes}
                showImages={this.props.showImages}
                showActions={this.props.showActions}
                indent={this.props.indent}
                gridLines={this.props.gridLines}
                showActionsOnNodeHover={this.props.showActionsOnNodeHover}
                showChevrons={this.props.showChevrons}


                elementInnerPadding={this.props.elementInnerPadding}

                treeView={this}
                node={node}
                renderer={this.props.renderer}
                layoutOptions={this.props.layoutOptions}
                level={0}
                onBeforeNodeExpand={this.props.onBeforeNodeExpand}
                onAfterNodeExpanded={this.props.onAfterNodeExpanded}

                id={1}
                data={child}

                checkOnClick={this.props.checkOnClick}
                
                
                clickBehavior={this.props.clickBehavior}
                uniqueSelection={this.props.uniqueSelection}
                
                onSelectionChanged={this.handleSelectionChanged}
                
                parentExpanded={true}
                autoCheck={this.props.autoCheck}
                isChecked={child.state?.isChecked}
                
                autoHideActions={this.props.autoHideActions}
                
                chevronsOutsideNode={false}
                
                checkBoxesOutsideNode={false}
                
                rootNode={false}
                >
                    <TreeNode.Image>
                        { this.props.children![0].props.children }
                    </TreeNode.Image>
                    <TreeNode.Content>
                        { this.props.children![1].props.children }
                    </TreeNode.Content>
                    <TreeNode.Actions>
                        { this.props.children![2].props.children }
                    </TreeNode.Actions>
                </TreeNode>);
        }




        let result = 

        <div className={'tree-viewc'} style={{ width: '100%', position: 'relative' }}>
            
            <div className={ `tree-view ${this.props.nonSelectable ? 'non-selectable' : ''}`} >

                <div style={{ padding: '2px' }}>
                    { treeNodes }
                </div>
               
            </div>
        </div>
        

        return result
    }
}

export default TreeView;