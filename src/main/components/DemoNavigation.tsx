import React from "react";
import { ITreeNodeInformation } from "../data/ITreeNodeInformation";
import { FullRowSelectionModes } from "../rendering/LayoutOptions";
import Modal from "./demo/modal/Modal";
import { IDemoNavigationComponentProps } from "./IDemoNavigationComponentProps";
import { IDemoNavigationComponentState } from "./IDemoNavigationComponentState";
import TreeView from "./TreeView";

export class DemoNavigation extends React.Component<IDemoNavigationComponentProps, IDemoNavigationComponentState> {
    constructor(props: IDemoNavigationComponentProps) {
        super(props);

        this.state = {
            navigationItems: this.props.navigationItems
        }
    }
    
    /* Handles the component update via props. */
    componentDidUpdate(prevProps: Readonly<IDemoNavigationComponentProps>, prevState: Readonly<IDemoNavigationComponentState>, snapshot?: any): void {
        if (this.props.navigationItems != prevState.navigationItems) {
            this.setState({
                navigationItems: this.props.navigationItems
            });
        }
    }
    
    /* Handles when the information action is clicked. */
    handleInformationActionClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, nodeInformation: ITreeNodeInformation): void {
        e.stopPropagation();
        
        if (this.props.onDemoInformationActionClicked != null) {
            this.props.onDemoInformationActionClicked(nodeInformation);
        }
    }

    render() {
        return (
            <>
                <TreeView
                    fullRowSelectionMode={FullRowSelectionModes.Level}
                    showCheckBoxes={false}
                    showImages={false}
                    showChevrons={true}
                    showActions={true}
                    indent={38}
                    gridLines={false}
                    showActionsOnNodeHover={true}
                    overlayScrollBar={false}
                    uniqueSelection={true}
                    disableDeselection={true}
                    
                    elementInnerPadding={{
                        top: 8,
                        left: 8,
                        bottom: 8,
                        right: 8
                    }}

                    onBeforeNodeSelect={async (nodeInformation) => {
                        if (!nodeInformation.state.isSelected) {
                            if (this.props.onBeforeDemoConfigurationChanged != null) {
                                await this.props.onBeforeDemoConfigurationChanged(nodeInformation);
                            }
                        }
                    }}
                    onAfterNodeSelect={async (nodeInformation) => {
                        if (!nodeInformation.state.isSelected) {
                            if (this.props.onAfterDemoConfigurationChanged != null) {
                                await this.props.onAfterDemoConfigurationChanged(nodeInformation);
                            }
                        }
                    }}
                
                    data={this.state.navigationItems}>
                    <TreeView.Image>
                            {(data) =>
                            <div className={'node-image rounded blank'}>
                                { data.state.isExpanding &&
                                    <div className={'loader'}></div>
                                }
                                { !data.state.isExpanding &&
                                    <div className={'rounded'} style={{
                                        width: '32px'
                                    }}></div>
                                }
                            </div>
                            }
                        </TreeView.Image>
                        <TreeView.Content>
                            {(data) =>
                            <>
                                { data.node.additionalData.heading && (<div style={{color:'var(--color-demo-primary-text)'}}>
                                    { data.node.additionalData.text }
                                </div>)}
                                { !data.node.additionalData.heading &&
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', flex: 1 }}>
                                            <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', color: 'var(--color-demo-primary-text)' }}>
                                                    { data.node.additionalData.text }
                                            </span>
                                    </div>
                                    <div style={{ display: 'flex', flex: 1 }}>
                                        <span style={{ color: 'rgb(126, 126, 126)', textOverflow: 'ellipsis', overflow: 'hidden', marginTop: '8px' }}>
                                            { data.node.additionalData.description }
                                        </span>
                                    </div>
                                    { data.node.additionalData.tags != null && (
                                    <div style={{ display: 'flex', flex: 1, marginTop: '8px' }}>
                                        { data.node.additionalData.tags.map((tag) => {
                                            return (
                                                <div className={'tag'}>
                                                    { tag }
                                                </div>
                                            );
                                        })}
                                    </div>)}
                                </div> }
                            </>
                            }
                        </TreeView.Content>
                        <TreeView.Actions>
                            {(data) => <>
                            { !data.properties.nonSelectable && !data.node.additionalData.heading && <div>
                                <div className={'node-action'} onClick={(e) => this.handleInformationActionClick(e, data)}>
                                    <i className={'fa fa-question-circle'} aria-hidden="true"></i>
                                </div>
                            </div> }
                            </> }
                        </TreeView.Actions>
                </TreeView>
            </>
        );
    }
}

export default DemoNavigation;