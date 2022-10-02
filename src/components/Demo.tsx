import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import { IDemoConfiguration } from "../helpers/demo/IDemoConfiguration";
import { FullRowSelectionModes } from "../rendering/LayoutOptions";
import './Demo.scoped.scss';
import DemoEditor from "./DemoEditor";
import DemoNavigation from "./DemoNavigation";
import DemoTreeView from "./DemoTreeView";
import { IDemoComponentProps } from "./IDemoComponentProps";
import { IDemoComponentState } from "./IDemoComponentState";
import { ClickBehavior } from "./ITreeViewProps";

export class Demo extends React.Component<IDemoComponentProps, IDemoComponentState> {
    constructor(props: any) {
        super(props);
        
        this.onEditorUpdate = this.onEditorUpdate.bind(this);

        this.demos = [{
            id: 0,

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

            // Behavior
            useWaitCursor: true,
            nonSelectable: false,
            clickBehavior: ClickBehavior.Select,
            uniqueSelection: true,
            autoHideActions: true,
            showActionsOnNodeHover: true,
            autoCheck: true,

            // Data
            data: [{
                id: 1,
                node: {
                    additionalData: {
                        text: 'John Smith',
                        emailAddress: 'john.smith@domain.com',
                        imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-2.jpg'
                    }
                },
                state: {
                    isExpanded: true,
                    isExpanding: false,
                    isChecked: false,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false
                },
                children: [{
                    id: 2,
                    node: {
                        additionalData: {
                            text: 'Jane Joe',
                            emailAddress: 'jane.doe@domain.com',
                            imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-3.jpg'
                        }
                    },
                    state: {
                        isExpanded: true,
                        isExpanding: false,
                        isChecked: false,
                        isSelected: false,
                        isEnabled: false,
                        isIndeterminate: false
                    },
                    children: [{
                        id: 3,
                        node: {
                            additionalData: {
                                text: 'Grace Charles',
                                emailAddress: 'grace.charles@domain.com',
                                imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-4.jpg'
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
                        id: 4,
                        node: {
                            additionalData: {
                                text: 'Lucy Green',
                                emailAddress: 'lucy.green@domain.com',
                                imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-5.jpg'
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
                    }]
                },
                {
                    id: 5,
                    node: {
                        additionalData: {
                            text: 'Maddison Perry',
                            emailAddress: 'maddison.perry@domain.com',
                            imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-6.jpg'
                        }
                    },
                    state: {
                        isExpanded: true,
                        isExpanding: false,
                        isChecked: false,
                        isSelected: false,
                        isEnabled: false,
                        isIndeterminate: false
                    },
                    children: [{
                        id: 2,
                        node: {
                            additionalData: {
                                text: 'Jane Joe',
                                emailAddress: 'jane.doe@domain.com',
                                imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-3.jpg'
                            }
                        },
                        state: {
                            isExpanded: true,
                            isExpanding: false,
                            isChecked: false,
                            isSelected: false,
                            isEnabled: false,
                            isIndeterminate: false
                        },
                        children: [{
                            id: 3,
                            node: {
                                additionalData: {
                                    text: 'Grace Charles',
                                    emailAddress: 'grace.charles@domain.com',
                                    imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-4.jpg'
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
                            id: 4,
                            node: {
                                additionalData: {
                                    text: 'Lucy Green',
                                    emailAddress: 'lucy.green@domain.com',
                                    imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-5.jpg'
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
                        }]
                    },
                    {
                        id: 5,
                        node: {
                            additionalData: {
                                text: 'Maddison Perry',
                                emailAddress: 'maddison.perry@domain.com',
                                imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-6.jpg'
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
                        children: [{
                            id: 2,
                            node: {
                                additionalData: {
                                    text: 'Jane Joe',
                                    emailAddress: 'jane.doe@domain.com',
                                    imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-3.jpg'
                                }
                            },
                            state: {
                                isExpanded: true,
                                isExpanding: false,
                                isChecked: false,
                                isSelected: false,
                                isEnabled: false,
                                isIndeterminate: false
                            },
                            children: [{
                                id: 3,
                                node: {
                                    additionalData: {
                                        text: 'Grace Charles',
                                        emailAddress: 'grace.charles@domain.com',
                                        imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-4.jpg'
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
                                id: 4,
                                node: {
                                    additionalData: {
                                        text: 'Lucy Green',
                                        emailAddress: 'lucy.green@domain.com',
                                        imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-5.jpg'
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
                            }]
                        },
                        {
                            id: 5,
                            node: {
                                additionalData: {
                                    text: 'Maddison Perry',
                                    emailAddress: 'maddison.perry@domain.com',
                                    imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-6.jpg'
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
                            children: [{
                                id: 2,
                                node: {
                                    additionalData: {
                                        text: 'Jane Joe',
                                        emailAddress: 'jane.doe@domain.com',
                                        imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-3.jpg'
                                    }
                                },
                                state: {
                                    isExpanded: true,
                                    isExpanding: false,
                                    isChecked: false,
                                    isSelected: false,
                                    isEnabled: false,
                                    isIndeterminate: false
                                },
                                children: [{
                                    id: 3,
                                    node: {
                                        additionalData: {
                                            text: 'Grace Charles',
                                            emailAddress: 'grace.charles@domain.com',
                                            imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-4.jpg'
                                        }
                                    },
                                    state: {
                                        isExpanded: true,
                                        isExpanding: false,
                                        isChecked: false,
                                        isSelected: false,
                                        isEnabled: false,
                                        isIndeterminate: false
                                    },
                                    children: []
                                },
                                {
                                    id: 4,
                                    node: {
                                        additionalData: {
                                            text: 'Lucy Green',
                                            emailAddress: 'lucy.green@domain.com',
                                            imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-5.jpg'
                                        }
                                    },
                                    state: {
                                        isExpanded: true,
                                        isExpanding: false,
                                        isChecked: false,
                                        isSelected: false,
                                        isEnabled: false,
                                        isIndeterminate: false
                                    },
                                    children: []
                                }]
                            },
                            {
                                id: 5,
                                node: {
                                    additionalData: {
                                        text: 'Maddison Perry',
                                        emailAddress: 'maddison.perry@domain.com',
                                        imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-6.jpg'
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
                                emailAddress: 'jane.doe@domain.com',
                                imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-3.jpg'
                            }
                        },
                        state: {
                            isExpanded: true,
                            isExpanding: false,
                            isChecked: false,
                            isSelected: false,
                            isEnabled: false,
                            isIndeterminate: false
                        },
                        children: [{
                            id: 3,
                            node: {
                                additionalData: {
                                    text: 'Grace Charles',
                                    emailAddress: 'grace.charles@domain.com',
                                    imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-4.jpg'
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
                            children: [{
                                id: 2,
                                node: {
                                    additionalData: {
                                        text: 'Jane Joe',
                                        emailAddress: 'jane.doe@domain.com',
                                        imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-3.jpg'
                                    }
                                },
                                state: {
                                    isExpanded: true,
                                    isExpanding: false,
                                    isChecked: false,
                                    isSelected: false,
                                    isEnabled: false,
                                    isIndeterminate: false
                                },
                                children: [{
                                    id: 3,
                                    node: {
                                        additionalData: {
                                            text: 'Grace Charles',
                                            emailAddress: 'grace.charles@domain.com',
                                            imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-4.jpg'
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
                                    id: 4,
                                    node: {
                                        additionalData: {
                                            text: 'Lucy Green',
                                            emailAddress: 'lucy.green@domain.com',
                                            imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-5.jpg'
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
                                }]
                            },
                            {
                                id: 5,
                                node: {
                                    additionalData: {
                                        text: 'Maddison Perry',
                                        emailAddress: 'maddison.perry@domain.com',
                                        imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-6.jpg'
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
                                children: [
                                    
                                ]
                            }]
                        },
                        {
                            id: 4,
                            node: {
                                additionalData: {
                                    text: 'Lucy Green',
                                    emailAddress: 'lucy.green@domain.com',
                                    imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-5.jpg'
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
                        }]
                    },
                    {
                        id: 5,
                        node: {
                            additionalData: {
                                text: 'Maddison Perry',
                                emailAddress: 'maddison.perry@domain.com',
                                imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-6.jpg'
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
                        children: [
                            
                        ]
                    }]
                }]
            }]
        }];

        let copy = Demo.copyDemoConfiguration(this.demos[0]);

        copy.gridLines = false;

        this.demos.push(copy);

        this.state = {
            demoConfiguration: Demo.copyDemoConfiguration(this.demos[0]),
            selectedPage: 1
        };
    }


    demos: IDemoConfiguration[];

    setDemo(demoConfiguration: IDemoConfiguration): void {
        // this.setState({
        //     demoConfiguration: Demo.copyDemoConfiguration(demoConfiguration)
        // });
    }

    static copyDemoConfiguration(demoConfiguration: IDemoConfiguration): IDemoConfiguration {
        return {
            id: demoConfiguration.id,
                
            // Appearance
            elementOuterPadding: demoConfiguration.elementOuterPadding,
            elementInnerPadding: demoConfiguration.elementInnerPadding,
            imagePadding: demoConfiguration.imagePadding,
            textPadding: demoConfiguration.textPadding,
            borderRadius: demoConfiguration.borderRadius,
            fullRowSelectionMode: demoConfiguration.fullRowSelectionMode,
            showCheckBoxes: demoConfiguration.showCheckBoxes,
            showImages: demoConfiguration.showImages,
            showChevrons: demoConfiguration.showChevrons,
            showActions: demoConfiguration.showActions,
            indent: demoConfiguration.indent,
            gridLines: demoConfiguration.gridLines,

            // Behavior
            useWaitCursor: demoConfiguration.useWaitCursor,
            nonSelectable: demoConfiguration.nonSelectable,
            clickBehavior: demoConfiguration.clickBehavior,
            uniqueSelection: demoConfiguration.uniqueSelection,
            autoHideActions: demoConfiguration.autoHideActions,
            showActionsOnNodeHover: demoConfiguration.showActionsOnNodeHover,
            autoCheck: demoConfiguration.autoCheck,

            // Data
            data: demoConfiguration.data
        }
    }

    getSplitter(): JSX.Element {
        return (
            <div className={ `splitter` }>

                <div className={` splitter-line `}>

                </div>

            </div>
        )
    }

    onEditorUpdate(demoConfiguration: IDemoConfiguration): void {
        console.log(demoConfiguration);
        if (demoConfiguration != null) {
            this.setState({
                demoConfiguration: demoConfiguration
            });
        }
    }

    render() {
        

        return (
            <div>

                <div className={ `view-port` }>

                    <div className={ `editor-navigation` }>
                        <h1>
                            Alpha Build - ReactJS Nested List & Tree View Demo
                        </h1>
                        This demo app works best on a desktop browser due to screen size.
                    </div>

                    <div className={ `editor ${this.state.selectedPage == 0 ? ' sel-page-0' : ''} ${this.state.selectedPage == 1 ? ' sel-page-1' : ''} ${this.state.selectedPage == 2 ? ' sel-page-2' : ''} ${this.state.selectedPage == 3 ? ' sel-page-3' : ''}` }>

                        <div className={ `navigation` }>
                            
                            <DemoNavigation></DemoNavigation>

                        </div>

                        { this.getSplitter() }

                        <div className={ `tree-view` }>

                            <DemoTreeView demoConfiguration={this.state.demoConfiguration}></DemoTreeView>

                        </div>

                        { this.getSplitter() }

                        <div className={ `appearance` }>

                            <DemoEditor demoConfiguration={this.state.demoConfiguration} onUpdate={this.onEditorUpdate}></DemoEditor>

                        </div>

                        { this.getSplitter() }

                        <div className={ `json-viewer` }>
                            
                            <JsonViewer value={this.state.demoConfiguration.data}></JsonViewer>

                        </div>

                    </div>

                </div>

                <div className={ `editor-mobile-navigation` }>
                    {/* <div className={ `icon ${this.state.selectedPage == 0 ? ' selected' : ''}`} onClick={() => this.setState({
                        selectedPage: 0
                    })}>
                        <i className={ `fa fa-lg fa-list-ul ` } aria-hidden="true"></i>
                        <p>
                            Demos
                        </p>
                    </div> */}
                    <div className={ `icon ${this.state.selectedPage == 1 ? ' selected' : ''}`} onClick={() => this.setState({
                        selectedPage: 1
                    })}>
                        <i className={ `fa fa-lg fa-picture-o ` } aria-hidden="true"></i>
                        <p>
                            Demo
                        </p>
                    </div>
                    <div className={ `icon ${this.state.selectedPage == 2 ? ' selected' : ''}`} onClick={() => this.setState({
                        selectedPage: 2
                    })}>
                        <i className={ `fa fa-lg fa-pencil-square-o ` } aria-hidden="true"></i>
                        <p>
                            Customise
                        </p>
                    </div>
                    <div className={ `icon ${this.state.selectedPage == 3 ? ' selected' : ''}`} onClick={() => this.setState({
                        selectedPage: 3
                    })}>
                        <i className={ `fa fa-lg fa-code ` } aria-hidden="true"></i>
                        <p>
                            JSON
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}