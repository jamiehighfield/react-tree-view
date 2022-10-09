import React from 'react';
import { ITreeNodeInformation } from '../data/ITreeNodeInformation';
import { FullRowSelectionModes } from '../rendering/LayoutOptions';
import { Padding } from '../Utilities/Padding';
import { Demo } from './Demo';
import './DemoEditor.scoped.scss'
import DemoPadding from './DemoPadding';
import { IDemoEditorComponentProps } from './IDemoEditorComponentProps';
import { IDemoEditorComponentState } from './IDemoEditorComponentState';
import { ClickBehavior } from './ITreeViewProps';
import TreeView from './TreeView';

class DemoEditor extends React.Component<IDemoEditorComponentProps, IDemoEditorComponentState> {
    constructor(props: any) {
        super(props);

        this.state = {
            demoConfiguration: this.props.demoConfiguration,
            indent: this.props.demoConfiguration.indent
        };

        this.updateData();
    }

    componentDidUpdate(prevProps: Readonly<IDemoEditorComponentProps>, prevState: Readonly<IDemoEditorComponentState>, snapshot?: any): void {
        if (this.props.demoConfiguration != prevState.demoConfiguration) {
            this.setState({
                demoConfiguration: this.props.demoConfiguration
            }, () => {
                this.updateData();
            });
        }
    }

    updateData(): void {
        this.data = [
            {
                id: 0,
                node: {
                    additionalData: {
                        separator: true,
                        showLine: false,
                        showText: true,
                        text: 'Appearance'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: false,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    hideCheckBox: true,
                    nonInteractive: true
                }
            },
            {
                id: 0,
                node: {
                    additionalData: {
                        editor: 'padding',
                        text: 'Element Outer Padding',
                        emailAddress: 'Outer padding (margin) of each tree node.'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: false,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    hideCheckBox: true
                }
            },
            {
                id: 0,
                node: {
                    additionalData: {
                        editor: 'padding',
                        text: 'Element Inner Padding',
                        emailAddress: 'Inner padding (padding) of each tree node.'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: false,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    hideCheckBox: true
                }
            },
            {
                id: 0,
                node: {
                    additionalData: {
                        editor: 'padding',
                        text: 'Text Padding',
                        emailAddress: 'Text padding of each tree node.'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: false,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    hideCheckBox: true
                }
            },
            {
                id: 0,
                node: {
                    additionalData: {
                        editor: 'padding',
                        text: 'Image Padding',
                        emailAddress: 'Image padding of each tree node.'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: false,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    hideCheckBox: true
                }
            },
            {
                id: 1,
                node: {
                    additionalData: {
                        text: 'Show Check Boxes',
                        emailAddress: 'Whether or not check boxes are shown in the tree view.'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: this.state.demoConfiguration.showCheckBoxes,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    nonSelectable: true
                }
            },
            {
                id: 2,
                node: {
                    additionalData: {
                        text: 'Show Images',
                        emailAddress: 'Whether or not images are shown in the tree view.'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: this.state.demoConfiguration.showImages,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    nonSelectable: true
                }
            },
            {
                id: 3,
                node: {
                    additionalData: {
                        text: 'Show Chevrons',
                        emailAddress: 'Whether or not chevrons are shown in the tree view.'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: this.state.demoConfiguration.showChevrons,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    nonSelectable: true
                }
            },
            {
                id: 4,
                node: {
                    additionalData: {
                        text: 'Show Actions',
                        emailAddress: 'Whether or not actions are shown in the tree view.'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: this.state.demoConfiguration.showActions,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    nonSelectable: true
                }
            },
            {
                id: 5,
                node: {
                    additionalData: {
                        text: 'Show Grid Lines',
                        emailAddress: 'Whether or not grid lines are shown in the tree view.'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: this.state.demoConfiguration.gridLines,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    nonSelectable: true
                }
            },
            {
                id: 6,
                node: {
                    additionalData: {
                        editor: 'indent',
                        text: 'Ident',
                        emailAddress: 'Specifies the indent level of each tree node level.',
                        initialValue: this.state.indent,
                        onChange: (value) => {
                            this.setState({
                                indent: value
                            }, () => {
                                this.onUpdate(this.data);
                            });
                        }
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: false,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    nonSelectable: true,
                    hideCheckBox: true
                }
            },
            {
                id: 1,
                node: {
                    additionalData: {
                        text: 'Show Overlay',
                        emailAddress: 'Whether or not the tree view is overlaid to highlight specified items.'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: this.state.demoConfiguration.overlay,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    nonSelectable: true
                }
            },
            {
                id: 6,
                node: {
                    additionalData: {
                        separator: true,
                        showLine: true,
                        showText: true,
                        text: 'Behavior'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: false,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    hideCheckBox: true,
                    nonInteractive: true
                }
            },
            {
                id: 7,
                node: {
                    additionalData: {
                        text: 'Use Wait Cursor',
                        emailAddress: 'Whether or not a wait cursor is shown whilst expanding a tree node.'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: this.state.demoConfiguration.useWaitCursor,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    nonSelectable: true
                }
            },
            {
                id: 8,
                node: {
                    additionalData: {
                        text: 'Non-selectable',
                        emailAddress: 'Whether or not any item in the tree view can be selected.'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: this.state.demoConfiguration.nonSelectable,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    nonSelectable: true
                }
            },
            {
                id: 9,
                node: {
                    additionalData: {
                        text: 'Unique Selection',
                        emailAddress: 'Whether or not only one item in the tree view can be selected at one time.'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: this.state.demoConfiguration.uniqueSelection,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    nonSelectable: true
                }
            },
            {
                id: 10,
                node: {
                    additionalData: {
                        text: 'Auto-hide Actions',
                        emailAddress: 'Whether or not actions are auto-hidden.'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: this.state.demoConfiguration.autoHideActions,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    nonSelectable: true
                }
            },
            {
                id: 11,
                node: {
                    additionalData: {
                        text: 'Show Auto-hidden Actions on Node Hover',
                        emailAddress: 'Whether or not auto-hidden actions are shown on node hover.'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: false,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    nonSelectable: true
                }
            },
            {
                id: 11,
                node: {
                    additionalData: {
                        text: 'Auto-check Items',
                        emailAddress: 'Whether or not child items are automatically checked when their parent is checked.'
                    }
                },
                state: {
                    isExpanded: false,
                    isExpanding: false,
                    isChecked: this.state.demoConfiguration.autoCheck,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [],
                properties: {
                    hideChevronContainer: true,
                    hideImage: true,
                    nonSelectable: true
                }
            }
        ];
    }

    private data: ITreeNodeInformation[] = [];

    onUpdate(data: any): void {
        this.setState((previousState) => {
            return {
                demoConfiguration: {
                    ...previousState.demoConfiguration,

                    showCheckBoxes: data[5].state.isChecked,
                    showImages: data[6].state.isChecked,
                    showChevrons: data[7].state.isChecked,
                    showActions: data[8].state.isChecked,
                    gridLines: data[9].state.isChecked,
                    indent: this.state.indent,
                    overlay: data[11].state.isChecked,

                    useWaitCursor: data[7].state.isChecked,
                    nonSelectable: data[8].state.isChecked,
                    uniqueSelection: data[14].state.isChecked,
                    autoHideActions: data[10].state.isChecked,
                    autoCheck: data[11].state.isChecked
                }
            }
        }, () => {
            this.props.onUpdate(this.state.demoConfiguration);
        });
    }

    render() {
        return (
           <>
           { this.props.demoConfiguration != null && (
            <TreeView

            fullRowSelectionMode={FullRowSelectionModes.Level}
					showCheckBoxes={true}
					showImages={true}
					showActions={true}
					indent={20}
					gridLines={true}
					showActionsOnNodeHover={true}
					data={this.data}
                    clickBehavior={ClickBehavior.Check}
                    overlayScrollBar={false}

					elementInnerPadding={{
						top: 2,
						left: 2,
						bottom: 2,
						right: 2
					}}
                    
                    onDataChange={(data) => {
                        this.onUpdate(data);
                    }}
                    >
                    <TreeView.Image>
						{(data) =>
						<div className={'node-image rounded blank'} style={{
							width: '32px'
						}}>
							{ data.state.isExpanding &&
								<div className={'loader'}></div>
							}
							{ !data.state.isExpanding &&
								<img className={'rounded'} style={{
									width: '32px',
									height: '32px'
								}} src={data.node.additionalData.imageUrl}></img>
							}
						</div>
						}
					</TreeView.Image>
					<TreeView.Content>
						{(data) =>
						<>
                        { data.node.additionalData.separator && (
                            <div style={{ flex: 1, marginBottom: '10px' }}>
                                { data.node.additionalData.showLine && (<div className={`separator`}>
                                    <div className={`line`}>
                                        
                                    </div>
                                </div>)}
                                { data.node.additionalData.showText && (<div style={{color:'var(--color-demo-primary-text)'}}>
                                    { data.node.additionalData.text }
                                </div>)}
                            </div>
                        )}

                        { !data.node.additionalData.separator && data.node.additionalData.editor == undefined && (
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<div style={{ display: 'flex', flex: 1 }}>
									<span style={{ textOverflow: 'ellipsis', overflow: 'hidden', color:'var(--color-demo-primary-text)' }}>
											{ data.node.additionalData.text }
									</span>
							</div>
							<div style={{ display: 'flex', flex: 1 }}>
								<span style={{ color: 'rgb(126, 126, 126)', textOverflow: 'ellipsis', overflow: 'hidden' }}>
									{ data.node.additionalData.emailAddress }
								</span>                        
							</div>
						</div>)}

                        { data.node.additionalData.editor == 'indent' && (
                            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '33px' }}>
                                <div style={{ display: 'flex', flex: 1 }}>
                                        <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', color:'var(--color-demo-primary-text)' }}>
                                                { data.node.additionalData.text }
                                        </span>
                                </div>
                                <div style={{ display: 'flex', flex: 1 }}>
                                    <span style={{ color: 'rgb(126, 126, 126)', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                        { data.node.additionalData.emailAddress }
                                    </span>                        
                                </div>
                                <div style={{ display: 'flex', flex: 1, marginTop: '10px' }}>
                                    <input style={{ flex: 1 }} type="number" min="25" max="100" value={this.state.indent} onChange={(e) => {
                                        data.node.additionalData.onChange(e.target.valueAsNumber);
                                    }} placeholder="Indent"></input>
                                </div>
						    </div>)}
                            { data.node.additionalData.editor == 'padding' && (
                            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '33px', color:'var(--color-demo-primary-text)' }}>
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
                                <div style={{ display: 'flex', flex: 1, marginTop: '10px' }}>
                                    <DemoPadding padding={this.state.demoConfiguration.elementInnerPadding} onChanged={(padding: Padding) => {
                                        this.setState((previousState) => {
                                            return {
                                                ...previousState,
                                                demoConfiguration: {
                                                    ...previousState.demoConfiguration,
                                                    elementInnerPadding: padding
                                                }
                                            };
                                        });
                                    }}></DemoPadding>
                                </div>
						    </div>)}
                        </>
						}
					</TreeView.Content>
					<TreeView.Actions>
						{(data) =>
                        <>
                        
                        </>}
					</TreeView.Actions>
                    </TreeView>
           )}
           </>
        );
    }
}

export default DemoEditor;