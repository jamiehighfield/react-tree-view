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
            selectedChildren: [],

            nonInteractive: false,

            mouseDown: false,
            selectionVisible: false,
            selectionStartX: 0,
            selectionStartY: 0,
            selectionEndX: 0,
            selectionEndY: 0
        };

        this.handleSelectionChanged = this.handleSelectionChanged.bind(this);

        this.mainRef = React.createRef();
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
        // if (nodeInformation.state.isSelected) {
        //     if (!this.props.forcedSelection && this.state.selectedChildren.includes(nodeInformation.node)){
        //         this.setState((previousState) => {
        //             let selectedChildren: ITreeNodeData[] = previousState.selectedChildren;

        //             selectedChildren.splice(selectedChildren.indexOf(nodeInformation.node, 0), 1);

        //             return {
        //                 selectedChildren: selectedChildren
        //             }
        //         });
        //     }
        // }
        // else {
        //     this.setState((previousState) => {
        //         let selectedChildren: ITreeNodeData[] = previousState.selectedChildren;

        //         if (!selectedChildren.includes(nodeInformation.node)) {
        //             selectedChildren.push(nodeInformation.node);
        //         }

        //         if (this.props.uniqueSelection) {
        //             for (let node of selectedChildren) {
        //                 if (node != nodeInformation.node) {
        //                     selectedChildren.splice(selectedChildren.indexOf(node, 0), 1);
        //                 }
        //             }
        //         }

        //         return {
        //             selectedChildren: selectedChildren
        //         }
        //     });
        // }
    }
    
    componentDidUpdate(prevProps: Readonly<ITreeViewProps>, prevState: Readonly<ITreeViewComponentState>, snapshot?: any): void {
        if (this.props.data != prevProps.data) {
            this.forceUpdate();
        }
    }

    /* Handles before a node is selected. */
    async handleBeforeNodeSelect(nodeInformation: ITreeNodeInformation): Promise<any> {
        this.setState({
            nonInteractive: true
        });
        if (this.props.onBeforeNodeSelect != null) {
            await this.props.onBeforeNodeSelect(nodeInformation);
        }
        this.setState({
            nonInteractive: false
        });
    }
    
    /* Handles after a node is selected. */
    async handleAfterNodeSelect(nodeInformation: ITreeNodeInformation): Promise<any> {
        if (this.props.onAfterNodeSelect != null) {
            await this.props.onAfterNodeSelect(nodeInformation);
        }

        if (this.props.uniqueSelection) {
            this.handleUniqueSelection(this.props.data, nodeInformation);
        }
    }

    /* Deselects nodes other than the newly selected nodes. */
    handleUniqueSelection(nodes: ITreeNodeInformation[], nodeInformation: ITreeNodeInformation) {
        for (let node of nodes) {
            if (node != nodeInformation) {
                node.state.isSelected = false;
            }

            this.handleUniqueSelection(node.children, nodeInformation);
        }

        this.forceUpdate();
    }

    /* Handles global mouse down event, used for selection. */
    selectionMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        if (this.props.dragSelection) {
            let container = this.mainRef.current?.getBoundingClientRect();

            if (container != null) {
                let clientX: number = e.pageX - container?.x;
                let clientY: number = e.pageY - container?.y;

                this.setState({
                    mouseDown: true,
                    selectionStartX: clientX,
                    selectionStartY: clientY
                });
            }
        }
    }

    /* Handles global mouse up event, used for selection. */
    selectionMouseUp(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        if (this.props.dragSelection) {
            this.setState({
                mouseDown: false,
                selectionVisible: false,
                selectionStartX: 0,
                selectionStartY: 0,
                selectionEndX: 0,
                selectionEndY: 0
            });
        }
    }

    /* Handles global mouse move event, used for selection. */
    selectionMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {        
        if (this.props.dragSelection) {
            if (this.state.mouseDown) {               
                let container = this.mainRef.current?.getBoundingClientRect();

                if (container != null) {
                    let clientX: number = e.pageX - container?.x;
                    let clientY: number = e.pageY - container?.y;

                    this.setState({
                        selectionVisible: true,
                        selectionEndX: clientX,
                        selectionEndY: clientY
                    });
                }
            }
        }
    }


    mainRef: React.RefObject<HTMLDivElement>;

    updateData() {
        // this.props.onDataChange(this.state.)
    }



    static Image = (props: any) => null;
    static Content = (props: any) => null;
    static Actions = (props: any) => null;


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
                level={0}
                onBeforeNodeExpand={this.props.onBeforeNodeExpand}
                onAfterNodeExpand={this.props.onAfterNodeExpand}
                onBeforeNodeSelect={async (nodeInformation) => await this.handleBeforeNodeSelect(nodeInformation)}
                onAfterNodeSelect={async (nodeInformation) => await this.handleAfterNodeSelect(nodeInformation)}

                id={1}
                data={child}
                
                
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

                overlay={this.props.overlay}
                disableDeselection={this.props.disableDeselection}
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

        <div className={`tree-viewc auto-dark-mode ${this.props.overlay ? 'overlay' : ''} ${this.props.overlayScrollBar ? 'overflow-overlay' : ''} ${this.state.selectionVisible ? 'reset-cursor' : ''} ${this.state.nonInteractive ? 'non-interactive' : ''}`} style={{ flexGrow: 1, position: 'relative', userSelect: 'none', padding: '8px' }} onMouseDown={(e) => this.selectionMouseDown(e)} onMouseUp={(e) => this.selectionMouseUp(e)} onMouseMove={(e) => this.selectionMouseMove(e)}>
            
            <div ref={this.mainRef} className={ `tree-view ${this.props.nonSelectable ? 'non-selectable' : ''}`} style={{position:'relative'}}>

                <div style={{ padding: '0px' }}>
                    { treeNodes }
                </div>
               
            </div>

            { this.state.selectionVisible &&
            <div style={{
                position: 'absolute',
                left: this.state.selectionStartX < this.state.selectionEndX ? this.state.selectionStartX : this.state.selectionEndX,
                top: this.state.selectionStartY < this.state.selectionEndY ? this.state.selectionStartY : this.state.selectionEndY,
                width: this.state.selectionStartX < this.state.selectionEndX ? this.state.selectionEndX - this.state.selectionStartX : this.state.selectionStartX - this.state.selectionEndX,
                height: this.state.selectionStartY < this.state.selectionEndY ? this.state.selectionEndY - this.state.selectionStartY : this.state.selectionStartY - this.state.selectionEndY,
                backgroundColor: 'rgb(0, 0, 0, 0.1)',
                border: '1px solid #CFCFCF'
            }} onMouseDown={(e) => this.selectionMouseDown(e)} onMouseUp={(e) => this.selectionMouseUp(e)} onMouseMove={(e) => this.selectionMouseMove(e)}>

                </div>
            }

        </div>
        

        return result
    }
}

export default TreeView;