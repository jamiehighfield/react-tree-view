import React, { useContext } from "react";
import { ITreeNodeData } from "../data/ITreeNodeData";
import { FullRowSelectionModes } from "../rendering/LayoutOptions";
import { ITreeNodeProps } from "./ITreeNodeProps";
import { ITreeNodeComponentState } from "./ITreeNodeComponentState";
import { ClickBehavior } from "./ITreeViewProps";
import { ITreeNodeInformation } from "../data/ITreeNodeInformation";
import './TreeNode.scoped.scss'
import TreeView from "./TreeView";

var count = 0;

class TreeNode extends React.Component<ITreeNodeProps, ITreeNodeComponentState> {
    constructor(props: ITreeNodeProps) {
        super(props);
        
        this.state = {
            ...this.state,
            indent: this.props.indent,
            showCheckBoxes: this.props.showCheckBoxes,
            isChecked: this.props.isChecked,
            checkOnClick: true,
            showImages: this.props.showImages,
            isSelected: false,
            selectedChildren: [],
            disabled: false,
            showChevrons: this.props.showChevrons,
            isExpanded: this.props.data.state.isExpanded,
            overlay: this.props.overlay
        };

        // this.handleCheckChanged = this.handleCheckChanged.bind(this);
        // this.handleChildCheckChanged = this.handleChildCheckChanged.bind(this);

        this.handleCheckChanged = this.handleCheckChanged.bind(this);
        this.handleOnCheckChanged = this.handleOnCheckChanged.bind(this);
    }
    
    public static defaultProps = {
        visible: true
    }

    getNodeInformation(): ITreeNodeInformation {
        return this.props.data;
    }

    isSelected(): boolean {
        // for (let node of this.props.treeView.state.selectedChildren) {
        //     if (node == this.props.data) {
        //         return true;
        //     }
        // }
        return false;
    }

    /* Handles the click event of this node. */
    async handleNodeClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): Promise<any> {
        if (!this.state.disabled) {
            if ((this.props.clickBehavior & ClickBehavior.Select) != 0 && !this.props.data.properties?.nonInteractive && !this.props.data.properties?.nonSelectable) {
                
                if (this.props.onBeforeNodeSelect != null) {
                    await this.props.onBeforeNodeSelect(this.getNodeInformation());
                }

                if (!(this.props.data.state.isSelected && this.props.disableDeselection)) {
                    this.props.data.state.isSelected = !this.props.data.state.isSelected;
                    this.setState({
                        isSelected: !this.state.isSelected
                    });
                    this.props.onSelectionChanged(this.getNodeInformation());
                    
                    if (this.props.onAfterNodeSelect != null) {
                        await this.props.onAfterNodeSelect(this.getNodeInformation());
                    }

                    if (this.props.treeView.props.onDataChange != null) {
                        this.props.treeView.props.onDataChange(this.props.treeView.props.data);
                    }
                }
            }
            if ((this.props.clickBehavior & ClickBehavior.Check) != 0) {
                let nodeInformation: ITreeNodeInformation = this.getNodeInformation();

                let check: boolean = !this.state.isChecked;

                nodeInformation.state.isChecked = check;

                this.setCheckStateRecursive(nodeInformation, check);
                
                this.setState({
                    isChecked: check
                }, () => {
                    if (this.props.onCheckChanged != null) {
                        this.props.onCheckChanged(nodeInformation, check);
                    }
                    if (this.props.treeView.props.onDataChange != null) {
                        this.props.treeView.props.onDataChange(this.props.treeView.props.data);
                    }
                });
            }
            if ((this.props.clickBehavior & ClickBehavior.Expand) != 0) {
                await this.handleNodeExpand(e, this.getNodeInformation());
            }
        }
    }

    /* Handles expanding the node. */
    async handleNodeExpand(e: React.MouseEvent<HTMLDivElement, MouseEvent>, nodeInformation: ITreeNodeInformation): Promise<any> {
        e.stopPropagation();
        if (!this.state.isExpanding) {
            if (this.state.isExpanded) {
                this.props.data.state.isExpanded = !this.props.data.state.isExpanded;
                this.setState((previousState) => {
                    return {
                        isExpanded: !previousState.isExpanded
                    };
                });
                if (this.props.treeView.props.onDataChange != null) {
                    this.props.treeView.props.onDataChange(this.props.treeView.props.data);
                }
            }
            else {
                this.props.data.state.isExpanding = true;
                this.setState({
                    isExpanding: true
                });
                if (this.props.treeView.props.onDataChange != null) {
                    this.props.treeView.props.onDataChange(this.props.treeView.props.data);
                }

                if (this.props.onBeforeNodeExpand != null) {
                    await this.props.onBeforeNodeExpand(nodeInformation);
                }
                this.props.data.state.isExpanding = false;
                this.setState({
                    isExpanding: false
                });
                if (this.props.treeView.props.onDataChange != null) {
                    this.props.treeView.props.onDataChange(this.props.treeView.props.data);
                }

                if (!this.props.autoCheck && this.state.isChecked) {
                    for (let child of nodeInformation.children) {
                        child.state.isChecked = true;
                    }
                }

                if (this.props.onAfterNodeExpand != null) {
                    await this.props.onAfterNodeExpand(nodeInformation);
                }
                
                this.props.data.state.isExpanded = !this.props.data.state.isExpanded;
                this.setState((previousState) => {
                    return {
                        isExpanded: !previousState.isExpanded
                    };
                });
                if (this.props.treeView.props.onDataChange != null) {
                    this.props.treeView.props.onDataChange(this.props.treeView.props.data);
                }

                if (!this.state.isExpanded) {
                    for (let child of this.props.data.children) {
                        if (child.state.isSelected) {
                            // alert('f');
                        }
                    }
                }
            }
        }
    }

    /* Handles the click event of this node's expand button. */
    async handleNodeExpandClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): Promise<any> {
        e.stopPropagation();

        await this.handleNodeExpand(e, this.getNodeInformation());
    }

    /* Handles the change of selection for any node in the tree. */
    handleGlobalNodeSelectionChanged(nodeInformation: ITreeNodeInformation): void {

        
        
    }

    handleCheckChanged(e: React.ChangeEvent<HTMLInputElement>): void {
        // let nodeInformation: ITreeNodeInformation = this.getNodeInformation();

        // let check: boolean = !this.state.isChecked;

        // nodeInformation.state.isChecked = check;

        // this.setCheckStateRecursive(nodeInformation, check);
        
        // this.setState({
        //     isChecked: check
        // }, () => {
        //     // this.props.onCheckChanged(nodeInformation, check);
        // });

        // let nodeInformation: ITreeNodeInformation = this.getNodeInformation();

        //         let check: boolean = !this.state.isChecked;

        //         alert(check.toString());

        //         //nodeInformation.state.isChecked = check;

        //         // this.setCheckStateRecursive(nodeInformation, check);
                
        //         this.setState({
        //             isChecked: check
        //         }, () => {
        //             // if (this.props.onCheckChanged != null) {
        //             //     this.props.onCheckChanged(nodeInformation, check);
        //             // }
        //             // if (this.props.treeView.props.onDataChange != null) {
        //             //     this.props.treeView.props.onDataChange(this.props.treeView.props.data);
        //             // }
        //         });

        let nodeInformation: ITreeNodeInformation = this.getNodeInformation();

        let check: boolean = !this.state.isChecked;

        nodeInformation.state.isChecked = check;

        this.setCheckStateRecursive(nodeInformation, check);
        
        this.setState({
            isChecked: check
        }, () => {
            if (this.props.onCheckChanged != null) {
                this.props.onCheckChanged(nodeInformation, check);
            }
            if (this.props.treeView.props.onDataChange != null) {
                this.props.treeView.props.onDataChange(this.props.treeView.props.data);
            }
        });

    }

    setCheckStateRecursive(nodeInformation: ITreeNodeInformation, check: boolean): void {
        for (let child of nodeInformation.children) {
            child.state.isChecked = check;

            this.setCheckStateRecursive(child, check);
        }
    }

    handleOnCheckChanged(nodeInformation: ITreeNodeInformation, checked: boolean): void {
        let isIndeterminate: boolean = false;
        
        if (this.getNodeInformation().state.isChecked) {
            for (let child of this.getNodeInformation().children) {
                if (!child.state.isChecked) {
                    isIndeterminate = true;
                    break;
                }
            }
        }

        if (isIndeterminate) {
            if (this.props.onCheckChanged != null) {
                this.getNodeInformation().state.isChecked = false;
                this.props.onCheckChanged(this.getNodeInformation(), false);
            }
        }
        else {
        }
        if (this.props.treeView.props.onDataChange != null) {
            this.props.treeView.props.onDataChange(this.props.treeView.props.data);
        }
        this.forceUpdate();
    }

    

    static Image = (props: any) => null;
    static Content = (props: any) => null;
    static Actions = (props: any) => null;





    checkboxRef = React.createRef();

    componentDidUpdate(prevProps: Readonly<ITreeNodeProps>, prevState: Readonly<ITreeNodeComponentState>, snapshot?: any): void {
        count = 0;
        //console.log(this.props.isChecked);
        //console.log(this.state.testn);
        if (prevState.indent != this.props.indent) {
            this.setState({
                indent: this.props.indent
            });
        }
        if (prevState.showCheckBoxes != this.props.showCheckBoxes) {
            this.setState({
                showCheckBoxes: this.props.showCheckBoxes
            });
        }
        if (prevState.showImages != this.props.showImages) {
            this.setState({
                showImages: this.props.showImages
            });
        }
        if (prevState.isChecked != this.props.isChecked) {
            this.setState({
                isChecked: this.props.isChecked
            });
        }
        if (this.props.data.state.isSelected != prevState.isSelected) {
            this.setState({
                isSelected: this.props.data.state.isSelected
            });
        }
        if (prevState.overlay != this.props.overlay) {
            this.setState({
                overlay: this.props.overlay
            });
        }
        
        // if (prevState.isChecked != this.props.isChecked) {
        //     this.setState({
        //         isChecked: this.props.isChecked
        //     }, () => {
        //     });
            
        //     //this.handleCheckChanged(this.getNodeInformation());
        // }
    }
    
    handleClick(e) {
        e.stopPropagation();
    }

    /* Gets the children of this node. */
    getChildrenElements(): any[] {
        let children: any[] = [];

        children.push(this.props.data.children.map((child) => {                
            return (
                <TreeNode
                    {...this.props}
                    data={child}
                    level={this.props.level + 1}
                    parentExpanded={this.state.isExpanded}

                    rootNode={false}

                    // Check Behavior
                    isChecked={child.state.isChecked}
                    onCheckChanged={this.handleOnCheckChanged}
                />
            );
        }));

        return children;
    }

    static emptyClass: string = "";

    /* Gets the class names for the current state of the node. */
    private getDynamicNodeClasses(): string {
        let result: string = `
            ${this.props.fullRowSelectionMode == FullRowSelectionModes.Level ? 'full-row-select' : TreeNode.emptyClass}
            ${this.state.isSelected ? 'selected' : TreeNode.emptyClass}
            ${this.props.data.properties?.nonInteractive ? 'non-interactive' : TreeNode.emptyClass}
            ${this.state.isExpanded ? 'expanded' : TreeNode.emptyClass}
            ${this.props.showActionsOnNodeHover ? 'actions-partial-auto-hide' : TreeNode.emptyClass}
            `;
        
        return this.removeWhiteSpace(
            /* This is to change line breaks to white space, and to remove excess white space. */
            result);            
    }

    private getDynamicOuterNodeBodyStyles(): React.CSSProperties {
        return {
            // marginLeft: this.state.indent
            // borderLeft: '1px solid red',
            // marginLeft: this.state.indent - 15
            // marginLeft: (this.props.layoutOptions.FullRowSelectionMode == FullRowSelectionModes.Level || (this.props.layoutOptions.FullRowSelectionMode == FullRowSelectionModes.Content) ? (this.props.level * this.state.indent) : 0) + this.props.layoutOptions.ElementOuterPadding.left,
        };
    }

    /* Gets the styles for the current state of the node. */
    private getNodeStyles(): React.CSSProperties {
        return {
            // /* Element outer padding */
            // marginTop: this.props.layoutOptions.ElementOuterPadding.top,
            // marginLeft: (this.props.layoutOptions.FullRowSelectionMode == FullRowSelectionModes.Level || (this.props.layoutOptions.FullRowSelectionMode == FullRowSelectionModes.Content) ? (this.props.level * this.state.indent) : 0) + this.props.layoutOptions.ElementOuterPadding.left,
            // marginBottom: this.props.layoutOptions.ElementOuterPadding.bottom,
            // marginRight: this.props.layoutOptions.ElementOuterPadding.right

            // /* Element inner padding */
            // ,
            // paddingTop: this.props.layoutOptions.ElementInnerPadding.top,
            // paddingLeft: (this.props.layoutOptions.FullRowSelectionMode == FullRowSelectionModes.Full ? (this.props.level * this.state.indent) : 0) + this.props.layoutOptions.ElementInnerPadding.left,
            // paddingBottom: this.props.layoutOptions.ElementInnerPadding.bottom,
            // paddingRight: this.props.layoutOptions.ElementInnerPadding.right

            // /* Display */
            // ,
            // display: (this.props.layoutOptions.FullRowSelectionMode == FullRowSelectionModes.Content ? "inline-flex" : "flex")

            // /* Radius */
            // ,
            // borderRadius: this.props.layoutOptions.ElementRadius.TopLeft + 'px ' + this.props.layoutOptions.ElementRadius.TopRight + 'px ' + this.props.layoutOptions.ElementRadius.BottomRight + 'px ' + this.props.layoutOptions.ElementRadius.BottomLeft + 'px'
        };
    }

    private getDynamicInnerNodeBodyStyles(): React.CSSProperties {
        let result: any = { };

        if (this.props.elementInnerPadding != null) {
            if (this.props.elementInnerPadding.top != TreeView.defaultProps.elementInnerPadding.top
                || this.props.elementInnerPadding.left != TreeView.defaultProps.elementInnerPadding.left
                || this.props.elementInnerPadding.bottom != TreeView.defaultProps.elementInnerPadding.bottom
                || this.props.elementInnerPadding.right != TreeView.defaultProps.elementInnerPadding.right) {
                    
                    return {
                        paddingTop: this.props.elementInnerPadding.top,
                        paddingLeft: this.props.elementInnerPadding.left,
                        paddingBottom: this.props.elementInnerPadding.bottom,
                        paddingRight: this.props.elementInnerPadding.right
                    }
                }
        }

        return result;
    }

    /* Gets the chevron JSX element. */
    private getChevron(): JSX.Element {
        return (
            <div className={ this.removeWhiteSpace(`node-chevron`) }>
                
                { !this.props.data.properties?.hideChevron && (
                
                <div className={ this.removeWhiteSpace(`outer-node-chevron-body`) } onClick={async(e) => this.handleNodeExpand(e, this.getNodeInformation())}>

                    <div className={ this.removeWhiteSpace(`inner-node-chevron-body`) }>
                        <div className={ this.removeWhiteSpace(`chevron`) }></div>
                    </div>

                </div>

                )}

            </div>
        );
    }

    /* Gets the image JSX element. */
    private getImage(): JSX.Element {
        return (
            <div className={ this.removeWhiteSpace(`node-image`) }>
                                
                <div className={ this.removeWhiteSpace(`outer-node-image-body`) }>

                    <div className={ this.removeWhiteSpace(`inner-node-image-body`) }> 
                        { this.props.children![0].props.children(this.getNodeInformation()) }
                    </div>

                </div>

            </div>
        );            
    }

    /* Gets the check box JSX element. */
    private getCheckBox(): JSX.Element {
        return (
            <div className={ this.removeWhiteSpace(`node-check-box`) }>
                                
                <div className={ this.removeWhiteSpace(`outer-node-check-box-body`) }>

                    <div className={ this.removeWhiteSpace(`inner-node-check-box-body`) }> 
                    
                        <label className={ this.removeWhiteSpace(`check-box-label`) }>
                            <input type="checkbox" className={ this.removeWhiteSpace(`check-box`) } checked={this.state.isChecked} onChange={this.handleCheckChanged} />
                            <span onClick={(e) => e.stopPropagation()} ></span>
                        </label>

                    </div>

                </div>

            </div>
        );
    }

    /* Gets the content JSX element. */
    private getContent(): JSX.Element {
        return (
            <div className={ this.removeWhiteSpace(`node-content`) }>
                                
                <div className={ this.removeWhiteSpace(`outer-node-content-body`) }>

                    <div className={ this.removeWhiteSpace(`inner-node-content-body`) }> 
                        { this.props.children![1].props.children(this.getNodeInformation()) }
                    </div>

                </div>

            </div>
        );
    }
    
    /* This is to change line breaks to white space, and to remove excess white space. */
    protected removeWhiteSpace(input: string): string {
        return input
            .replace(/\n/g, " ")
            .replace(/\s\s+/g, " ")
            .trim()
    }
    

    render() {
        /* Determine if rendering should be attempted */
        let doRender: boolean = (!this.props.rootNode && this.props.visible && !this.props.data.state.isHidden);

        let nodeContents: JSX.Element = (<></>);
        let children: any = [];

        if (doRender) {
            /* If this is a root node, then the contents aren't rendered, just children. */
            if (!this.props.rootNode) {

                nodeContents = (
                <></>);

                if (this.props.parentExpanded) {
                    nodeContents = (
                        // This is the outer most container for a node and represents the full-width of the tree visualViewport.
                        <div className={ this.removeWhiteSpace(`new-node dark-mode ${this.getDynamicNodeClasses()}`) }>
                            
                            {/* This is the outer node body for a node. The width of this container is determined by its content
                                but this container has any margins applied to it to represent tree view depth. */}
                            <div className={ this.removeWhiteSpace(`outer-node-body`) } style={ this.getDynamicOuterNodeBodyStyles() }>
                                
                                { this.props.level != 0 &&
                                
                                <div style={{
                                    width: 10 + (this.props.indent - 25)
                                }}>
                                    { this.props.gridLines && 
                                    <div style={{
                                        height: '50%',
                                        borderBottom: '1px solid var(--color-grid-lines)'
                                    }}></div>
                                }
                                    </div>
                                }

                                { this.props.showChevrons && !this.props.data.properties?.hideChevronContainer && this.props.chevronsOutsideNode &&

                                this.getChevron()
                                
                                }

                                { this.state.showCheckBoxes && !this.props.data.properties?.hideCheckBox && this.props.checkBoxesOutsideNode &&

                                this.getCheckBox()

                                }

                                {/* This is the inner node body for a node. This is the container that shows visual cues
                                    when interacted with the pointer (i.e. hover effects). */}
                                <div className={ this.removeWhiteSpace(`inner-node-body`) } style={ this.getDynamicInnerNodeBodyStyles() }onClick={async (e) => this.handleNodeClick(e)}>

                                    { this.props.showChevrons && !this.props.data.properties?.hideChevronContainer && !this.props.chevronsOutsideNode &&
                                    
                                    this.getChevron()
                                    
                                    }

                                    { this.state.showCheckBoxes && !this.props.data.properties?.hideCheckBox && !this.props.checkBoxesOutsideNode &&

                                    this.getCheckBox()

                                    }

                                    { this.props.showImages && !this.props.data.properties?.hideImage &&
                                    
                                    this.getImage()
                                    
                                    }

                                    {

                                    this.getContent()

                                    }

                                    <div className={ 'node-actions' }>
                                        <div className={ 'outer-node-actions-body' }>
                                            <div className={ 'inner-node-actions-body' }>
                                                { this.props.children![2].props.children(this.getNodeInformation()) }
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                                

                            </div>

                            { this.state.overlay && !this.props.data.state.isOverlaid &&
                            
                            <div className={ this.removeWhiteSpace(`overlay client ${this.props.data.state.isOverlaid ? 'transparent' : ''}`) } style={{
                                left: this.props.level == 0 ? 0 : '11px',
                                width: this.props.level == 0 ? '100%' : 'calc(100% - 11px)'
                            }}></div>
                            
                            }

                        </div>
                    );
                }
            }
            
            children = this.getChildrenElements();
        }
        
        return (<div style={{position:'relative'}}><React.Fragment>
            { nodeContents }
            <div className={ `node-children ${this.props.gridLines ? 'grid-lines' : ''}` } style={{
                marginLeft: this.props.level == 0 ? 15 : this.props.indent,
                display: this.props.parentExpanded ? 'block' : 'none',
                position: 'relative'
            }}>
                { children }
                { this.state.overlay && this.props.level != 100 && 
                
                <div style={{width: (this.props.level == 0 ? this.state.indent + 1 : this.state.indent) + 1, left: (this.props.level == 0 ? '-16px' : '-15px')}} className={`overlay non-client ${this.props.data.state.isOverlaid ? 'transparent' : ''}`}></div>
                
                }
            </div>
        </React.Fragment></div>)
    }
}

export default TreeNode;