import React from "react";
import { ITreeNodeInformation } from "../data/ITreeNodeInformation";
import { FullRowSelectionModes } from "../rendering/LayoutOptions";
import TreeView from "./TreeView";

export class DemoNavigation extends React.Component {
    constructor(props: any) {
        super(props);

        this.navigationData = [{
            id: 0,
            node: {
                additionalData: {
                    text: 'Organisation Structure Demo',
                    emailAddress: 'Structuring organisation personelle in a tree view.',
                    imageUrl: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png'
                }
            },
            state: {
                isExpanded: false,
                isExpanding: false,
                isChecked: false,
                isSelected: false,
                isEnabled: false,
                isIndeterminate: false
            },
            children: []
        },
        {
            id: 0,
            node: {
                additionalData: {
                    text: 'Organisation Structure Demo',
                    emailAddress: 'Structuring organisation personelle in a tree view.',
                    imageUrl: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png'
                }
            },
            state: {
                isExpanded: false,
                isExpanding: false,
                isChecked: false,
                isSelected: false,
                isEnabled: false,
                isIndeterminate: false
            },
            children: []
        },
        {
            id: 0,
            node: {
                additionalData: {
                    text: 'Organisation Structure Demo',
                    emailAddress: 'Structuring organisation personelle in a tree view.',
                    imageUrl: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png'
                }
            },
            state: {
                isExpanded: false,
                isExpanding: false,
                isChecked: false,
                isSelected: false,
                isEnabled: false,
                isIndeterminate: false
            },
            children: []
        },
        {
            id: 0,
            node: {
                additionalData: {
                    text: 'Organisation Structure Demo',
                    emailAddress: 'Structuring organisation personelle in a tree view.',
                    imageUrl: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png'
                }
            },
            state: {
                isExpanded: false,
                isExpanding: false,
                isChecked: false,
                isSelected: false,
                isEnabled: false,
                isIndeterminate: false
            },
            children: []
        }];
    }

    private navigationData: ITreeNodeInformation[];

    render() {
        return (
            <TreeView
            fullRowSelectionMode={FullRowSelectionModes.Level}
					showCheckBoxes={false}
					showImages={false}
                    showChevrons={false}
					showActions={true}
					indent={20}
					gridLines={false}
					showActionsOnNodeHover={true}
                    
                    elementInnerPadding={{
                        top: 8,
                        left: 8,
                        bottom: 8,
                        right: 8
                    }}
            
            data={this.navigationData}>
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
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<div style={{ display: 'flex', flex: 1 }}>
									<span style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
											{ data.node.additionalData.text }
									</span>
							</div>
							<div style={{ display: 'flex', flex: 1 }}>
								<span style={{ color: 'rgb(126, 126, 126)', textOverflow: 'ellipsis', overflow: 'hidden' }}>
									{ data.state.isSelected && <span>test</span> }
									{ data.node.additionalData.emailAddress }
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

export default DemoNavigation;