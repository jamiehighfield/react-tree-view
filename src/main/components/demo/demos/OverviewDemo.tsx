import React from "react";
import { ITreeNodeInformation } from "../../../data/ITreeNodeInformation";
import { IDemoConfiguration } from "../../../helpers/demo/IDemoConfiguration";
import { Thread } from "../../../helpers/Thread";
import { FullRowSelectionModes } from "../../../rendering/LayoutOptions";
import { ClickBehavior } from "../../ITreeViewProps";
import { IDemo } from "./IDemo";

export class OverviewDemo implements IDemo {
    async handleBeforeNodeExpand(nodeInformation: ITreeNodeInformation): Promise<any> {
        if (!nodeInformation.node.additionalData.loaded) {
            await Thread.sleep(1000);
            nodeInformation.node.additionalData.loaded = true;
        }
    }

    getDemoConfiguration(): IDemoConfiguration {
        return {
            id: 0,
            name: "Overview",
            helpContent: (
                <>
                    The overview demo demonstrates a range of the core features of the component with testing seed data.
                </>
            ),

            // Appearance
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
            showCheckBoxes: true,
            showImages: true,
            showChevrons: true,
            showActions: true,
            indent: 25,
            gridLines: true,
            overlay: false,

            // Behavior
            useWaitCursor: true,
            nonSelectable: false,
            clickBehavior: ClickBehavior.Select,
            uniqueSelection: false,
            autoHideActions: true,
            showActionsOnNodeHover: true,
            autoCheck: true,

            // Data
            data: [{
                id: 1,
                node: {
                    additionalData: {
                        text: 'John Smith',
                        emailAddress: 'john.smith@test.com',
                        imageUrl: 'https://highfield.dev/team/team-2.jpg'
                    }
                },
                state: {
                    isExpanded: true,
                    isExpanding: false,
                    isChecked: false,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false
                },
                children: [{
                    id: 2,
                    node: {
                        additionalData: {
                            text: 'Jane Joe',
                            emailAddress: 'jane.doe@test.com',
                            imageUrl: 'https://highfield.dev/team/team-3.jpg'
                        }
                    },
                    state: {
                        isExpanded: true,
                        isExpanding: false,
                        isChecked: false,
                        isSelected: false,
                        isEnabled: false,
                        isIndeterminate: false,
                        isOverlaid: false
                    },
                    children: [{
                        id: 3,
                        node: {
                            additionalData: {
                                text: 'Grace Charles',
                                emailAddress: 'grace.charles@test.com',
                                imageUrl: 'https://highfield.dev/team/team-4.jpg'
                            }
                        },
                        state: {
                            isExpanded: false,
                            isExpanding: false,
                            isChecked: false,
                            isSelected: false,
                            isEnabled: false,
                            isIndeterminate: false,
                            isOverlaid: true
                        },
                        children: []
                    },
                    {
                        id: 4,
                        node: {
                            additionalData: {
                                text: 'Lucy Green',
                                emailAddress: 'lucy.green@test.com',
                                imageUrl: 'https://highfield.dev/team/team-5.jpg'
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
                        children: []
                    }]
                },
                {
                    id: 5,
                    node: {
                        additionalData: {
                            text: 'Maddison Perry',
                            emailAddress: 'maddison.perry@test.com',
                            imageUrl: 'https://highfield.dev/team/team-6.jpg'
                        }
                    },
                    state: {
                        isExpanded: true,
                        isExpanding: false,
                        isChecked: false,
                        isSelected: false,
                        isEnabled: false,
                        isIndeterminate: false,
                        isOverlaid: false
                    },
                    children: [{
                        id: 2,
                        node: {
                            additionalData: {
                                text: 'Jane Joe',
                                emailAddress: 'jane.doe@test.com',
                                imageUrl: 'https://highfield.dev/team/team-3.jpg'
                            }
                        },
                        state: {
                            isExpanded: true,
                            isExpanding: false,
                            isChecked: false,
                            isSelected: false,
                            isEnabled: false,
                            isIndeterminate: false,
                            isOverlaid: false
                        },
                        children: [{
                            id: 3,
                            node: {
                                additionalData: {
                                    text: 'Grace Charles',
                                    emailAddress: 'grace.charles@test.com',
                                    imageUrl: 'https://highfield.dev/team/team-4.jpg'
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
                            children: []
                        },
                        {
                            id: 4,
                            node: {
                                additionalData: {
                                    text: 'Lucy Green',
                                    emailAddress: 'lucy.green@test.com',
                                    imageUrl: 'https://highfield.dev/team/team-5.jpg'
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
                            children: []
                        }]
                    },
                    {
                        id: 5,
                        node: {
                            additionalData: {
                                text: 'Maddison Perry',
                                emailAddress: 'maddison.perry@test.com',
                                imageUrl: 'https://highfield.dev/team/team-6.jpg'
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
                        children: [{
                            id: 2,
                            node: {
                                additionalData: {
                                    text: 'Jane Joe',
                                    emailAddress: 'jane.doe@test.com',
                                    imageUrl: 'https://highfield.dev/team/team-3.jpg'
                                }
                            },
                            state: {
                                isExpanded: true,
                                isExpanding: false,
                                isChecked: false,
                                isSelected: false,
                                isEnabled: false,
                                isIndeterminate: false,
                                isOverlaid: false
                            },
                            children: [{
                                id: 3,
                                node: {
                                    additionalData: {
                                        text: 'Grace Charles',
                                        emailAddress: 'grace.charles@test.com',
                                        imageUrl: 'https://highfield.dev/team/team-4.jpg'
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
                                children: []
                            },
                            {
                                id: 4,
                                node: {
                                    additionalData: {
                                        text: 'Lucy Green',
                                        emailAddress: 'lucy.green@test.com',
                                        imageUrl: 'https://highfield.dev/team/team-5.jpg'
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
                                children: []
                            }]
                        },
                        {
                            id: 5,
                            node: {
                                additionalData: {
                                    text: 'Maddison Perry',
                                    emailAddress: 'maddison.perry@test.com',
                                    imageUrl: 'https://highfield.dev/team/team-6.jpg'
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
                            children: [{
                                id: 2,
                                node: {
                                    additionalData: {
                                        text: 'Jane Joe',
                                        emailAddress: 'jane.doe@test.com',
                                        imageUrl: 'https://highfield.dev/team/team-3.jpg'
                                    }
                                },
                                state: {
                                    isExpanded: true,
                                    isExpanding: false,
                                    isChecked: false,
                                    isSelected: false,
                                    isEnabled: false,
                                    isIndeterminate: false,
                                    isOverlaid: false
                                },
                                children: [{
                                    id: 3,
                                    node: {
                                        additionalData: {
                                            text: 'Grace Charles',
                                            emailAddress: 'grace.charles@test.com',
                                            imageUrl: 'https://highfield.dev/team/team-4.jpg'
                                        }
                                    },
                                    state: {
                                        isExpanded: true,
                                        isExpanding: false,
                                        isChecked: false,
                                        isSelected: false,
                                        isEnabled: false,
                                        isIndeterminate: false,
                                        isOverlaid: false
                                    },
                                    children: []
                                },
                                {
                                    id: 4,
                                    node: {
                                        additionalData: {
                                            text: 'Lucy Green',
                                            emailAddress: 'lucy.green@test.com',
                                            imageUrl: 'https://highfield.dev/team/team-5.jpg'
                                        }
                                    },
                                    state: {
                                        isExpanded: true,
                                        isExpanding: false,
                                        isChecked: false,
                                        isSelected: false,
                                        isEnabled: false,
                                        isIndeterminate: false,
                                        isOverlaid: false
                                    },
                                    children: []
                                }]
                            },
                            {
                                id: 5,
                                node: {
                                    additionalData: {
                                        text: 'Maddison Perry',
                                        emailAddress: 'maddison.perry@test.com',
                                        imageUrl: 'https://highfield.dev/team/team-6.jpg'
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
                                children: [
                                    
                                ]
                            }]
                        }]
                    },
                    {
                        id: 2,
                        node: {
                            additionalData: {
                                text: 'Jane Joe',
                                emailAddress: 'jane.doe@test.com',
                                imageUrl: 'https://highfield.dev/team/team-3.jpg'
                            }
                        },
                        state: {
                            isExpanded: true,
                            isExpanding: false,
                            isChecked: false,
                            isSelected: false,
                            isEnabled: false,
                            isIndeterminate: false,
                            isOverlaid: false
                        },
                        children: [{
                            id: 3,
                            node: {
                                additionalData: {
                                    text: 'Grace Charles',
                                    emailAddress: 'grace.charles@test.com',
                                    imageUrl: 'https://highfield.dev/team/team-4.jpg'
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
                            children: [{
                                id: 2,
                                node: {
                                    additionalData: {
                                        text: 'Jane Joe',
                                        emailAddress: 'jane.doe@test.com',
                                        imageUrl: 'https://highfield.dev/team/team-3.jpg'
                                    }
                                },
                                state: {
                                    isExpanded: true,
                                    isExpanding: false,
                                    isChecked: false,
                                    isSelected: false,
                                    isEnabled: false,
                                    isIndeterminate: false,
                                    isOverlaid: false
                                },
                                children: [{
                                    id: 3,
                                    node: {
                                        additionalData: {
                                            text: 'Grace Charles',
                                            emailAddress: 'grace.charles@test.com',
                                            imageUrl: 'https://highfield.dev/team/team-4.jpg'
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
                                    children: []
                                },
                                {
                                    id: 4,
                                    node: {
                                        additionalData: {
                                            text: 'Lucy Green',
                                            emailAddress: 'lucy.green@test.com',
                                            imageUrl: 'https://highfield.dev/team/team-5.jpg'
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
                                    children: []
                                }]
                            },
                            {
                                id: 5,
                                node: {
                                    additionalData: {
                                        text: 'Maddison Perry',
                                        emailAddress: 'maddison.perry@test.com',
                                        imageUrl: 'https://highfield.dev/team/team-6.jpg'
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
                                children: [
                                    
                                ]
                            }]
                        },
                        {
                            id: 4,
                            node: {
                                additionalData: {
                                    text: 'Lucy Green',
                                    emailAddress: 'lucy.green@test.com',
                                    imageUrl: 'https://highfield.dev/team/team-5.jpg'
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
                            children: []
                        }]
                    },
                    {
                        id: 5,
                        node: {
                            additionalData: {
                                text: 'Maddison Perry',
                                emailAddress: 'maddison.perry@test.com',
                                imageUrl: 'https://highfield.dev/team/team-6.jpg'
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
                        children: [
                            
                        ]
                    }]
                }]
            }],

            // Events
            onBeforeNodeExpand: async (nodeInformation) => await this.handleBeforeNodeExpand(nodeInformation),

            // Children
            imageElement: (data) => {
                return (
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
                            }} src={data.node.additionalData.imageUrl} alt={'Profile Picture of ' + data.node.additionalData.text}></img>
                        }
                    </div>
                );
            },
            contentElement: (data) => {
                return (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flex: 1 }}>
                                <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', color: 'var(--color-demo-primary-text)' }}>
                                        { data.node.additionalData.text }
                                </span>
                        </div>
                        <div style={{ display: 'flex', flex: 1 }}>
                            <span style={{ color: 'rgb(126, 126, 126)', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                { data.node.additionalData.emailAddress }
                            </span>
                        </div>
                    </div>
                );
            },
            actionsElement: (data) => {
                return (
                    <div>
                        <div className={'node-action'} onClick={() => {
                            alert(data.node.additionalData.text);
                        }}>
                            <i className={'fa fa-trash'} aria-hidden="true"></i>
                        </div>
                        <div className={'node-action'}>
                            <i className={'fa fa-bath'} aria-hidden="true"></i>
                        </div>
                    </div>
                );
            }
        };
    }
}