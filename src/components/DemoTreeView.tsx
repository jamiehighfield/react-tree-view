import React from "react";
import { IDemoTreeViewComponentProps } from "./IDemoTreeViewComponentProps";
import { IDemoTreeViewComponentState } from "./IDemoTreeViewComponentState";
import TreeView from "./TreeView";

export class DemoTreeView extends React.Component<IDemoTreeViewComponentProps, IDemoTreeViewComponentState> {
    constructor(props: IDemoTreeViewComponentProps) {
        super(props);
    }

    render() {

        return (
            <TreeView
                elementOuterPadding={this.props.demoConfiguration.elementOuterPadding}
                elementInnerPadding={this.props.demoConfiguration.elementInnerPadding}
                imagePadding={this.props.demoConfiguration.imagePadding}
                textPadding={this.props.demoConfiguration.textPadding}
                borderRadius={this.props.demoConfiguration.borderRadius}
                fullRowSelectionMode={this.props.demoConfiguration.fullRowSelectionMode}
                showCheckBoxes={this.props.demoConfiguration.showCheckBoxes}
                showImages={this.props.demoConfiguration.showImages}
                showChevrons={this.props.demoConfiguration.showChevrons}
                showActions={this.props.demoConfiguration.showActions}
                indent={this.props.demoConfiguration.indent}
                gridLines={this.props.demoConfiguration.gridLines}

                useWaitCursor={this.props.demoConfiguration.useWaitCursor}
                nonSelectable={this.props.demoConfiguration.nonSelectable}
                clickBehavior={this.props.demoConfiguration.clickBehavior}
                uniqueSelection={this.props.demoConfiguration.uniqueSelection}
                autoHideActions={this.props.demoConfiguration.autoHideActions}
                showActionsOnNodeHover={this.props.demoConfiguration.showActionsOnNodeHover}
                autoCheck={this.props.demoConfiguration.autoCheck}

                data={this.props.demoConfiguration.data}
            >

<TreeView.Image>
						{(data) =>
						<div className={'node-image rounded blank'} style={{
							width: '32px'
						}}>
							{ data.state.isExpanding &&
								<div className={'loader'}></div>
							}
							{/* { !data.state.isExpanding &&
								// <img className={'rounded'} style={{
								// 	width: '32px',
								// 	height: '32px'
								// }} src={data.node.additionalData.imageUrl}></img>
							} */}
						</div>
						}
					</TreeView.Image>
					<TreeView.Content>
						{(data) =>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<div style={{ display: 'flex', flex: 1 }}>
									<span style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                        Hello
									</span>
							</div>
							<div style={{ display: 'flex', flex: 1 }}>
								<span style={{ color: 'rgb(126, 126, 126)', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                    Hello second
								</span>                        
							</div>
						</div>
						}
					</TreeView.Content>
					<TreeView.Actions>
						{(data) =>
						<div>
							<div className={'node-action'} onClick={() => {
								alert(data.node.additionalData.text);
							}}>
								<i className={'fa fa-trash'} aria-hidden="true"></i>
							</div>
							<div className={'node-action'}>
								<i className={'fa fa-bath'} aria-hidden="true"></i>
							</div>
						</div> }
					</TreeView.Actions>

            </TreeView>
        );
    }
}

export default DemoTreeView;