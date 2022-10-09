import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import { ITreeNodeInformation } from "../data/ITreeNodeInformation";
import { IDemoConfiguration } from "../helpers/demo/IDemoConfiguration";
import { Thread } from "../helpers/Thread";
import { FullRowSelectionModes } from "../rendering/LayoutOptions";
import './Demo.scoped.scss';
import { HighlightDemo } from "./demo/demos/HighlightDemo";
import { IDemo } from "./demo/demos/IDemo";
import { IDemoNavigationItem } from "./demo/demos/IDemoNavigationItem";
import { OverviewDemo } from "./demo/demos/OverviewDemo";
import Modal from "./demo/modal/Modal";
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
        this.handleInformationActionClick = this.handleInformationActionClick.bind(this);
        this.handleInformationModalClose = this.handleInformationModalClose.bind(this);

        this.populateDemos();
        this.configureDemoConfigurations();

        this.state = {
            demoConfiguration: this.demoConfigurations[0],
            navigationItems: this.getNavigationItems(),
            selectedPage: 0,
            informationModalVisible: false,
            informationModalTitle: "",
            informationModalHelpContent: <></>
        };
    }

    private demos: IDemo[];
    private demoConfigurations: IDemoConfiguration[];

    /* Populates all demos. */
    populateDemos(): void {
        this.demos = [
            new OverviewDemo(),
            new HighlightDemo()
        ]
    }
    
    /* Configures demo configurations. */
    configureDemoConfigurations(): void {
        this.demoConfigurations = [];

        for(let demo of this.demos) {
            this.demoConfigurations.push(demo.getDemoConfiguration());
        }
    }

    /* Gets all navigation items. */
    getNavigationItems(): IDemoNavigationItem[] {
        return [
            {
                id: 0,
                node: {
                    additionalData: {
                        heading: true,
                        text: 'Choose Demo'
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
                    nonInteractive: true
                }
            },
            {
                id: 1,
                node: {
                    additionalData: {
                        text: 'Overview',
                        description: 'High-level overview of the TreeView.',
                        demoId: 0,
                        tags: [
                            "Demo"
                        ]
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
                children: [],
                properties: {
                    hideChevron: true
                }
            },
            {
                id: 2,
                node: {
                    additionalData: {
                        text: 'Accessibility',
                        description: 'Demonstration of accessibility features.'
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
                children: [
                    {
                        id: 3,
                        node: {
                            additionalData: {
                                text: 'Item Highlighting',
                                description: 'Draw focus to one or more nodes.',
                                demoId: 1,
                                tags: [
                                    "Demo",
                                    "Accessibility"
                                ]
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
                            hideChevronContainer: true
                        }
                    },
                    {
                        id: 4,
                        node: {
                            additionalData: {
                                text: 'High Contrast',
                                description: 'Demonstrates high contrast colours.',
                                demoId: 2,
                                tags: [
                                    "Demo",
                                    "Accessibility"
                                ]
                            }
                        },
                        state: {
                            isExpanded: false,
                            isExpanding: false,
                            isChecked: false,
                            isSelected: false,
                            isEnabled: false,
                            isIndeterminate: false,
                            isOverlaid: false,
                            isHidden: true
                        },
                        children: [],
                        properties: {
                            hideChevronContainer: true
                        }
                    }
                ],
                properties: {
                    hideChevronContainer: false,
                    hideImage: true,
                    hideCheckBox: true,
                    nonInteractive: false,
                    nonSelectable: true
                }
            },
            {
                id: 5,
                node: {
                    additionalData: {
                        text: 'Other',
                        description: 'Demonstration of other features.'
                    }
                },
                state: {
                    isExpanded: true,
                    isExpanding: false,
                    isChecked: false,
                    isSelected: false,
                    isEnabled: false,
                    isIndeterminate: false,
                    isOverlaid: false,
                    isHidden: true
                },
                children: [
                    {
                        id: 6,
                        node: {
                            additionalData: {
                                text: 'Drag Selection',
                                description: 'Draw a selection rectangle using click-and-drag to select one or more nodes.',
                                demoId: 1,
                                tags: [
                                    "Demo",
                                    "Desktop only"
                                ]
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
                            hideChevronContainer: true
                        }
                    },
                    {
                        id: 7,
                        node: {
                            additionalData: {
                                text: 'Layout Properties',
                                description: 'Demonstrates different layout options, such as padding.',
                                demoId: 2,
                                tags: [
                                    "Demo"
                                ]
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
                            hideChevronContainer: true
                        }
                    }
                ],
                properties: {
                    hideChevronContainer: false,
                    hideImage: true,
                    hideCheckBox: true,
                    nonInteractive: false,
                    nonSelectable: true
                }
            }
        ]
    }

    /* Handles the demo changing via the navigation. */
    async handleDemoChanged(nodeInformation: ITreeNodeInformation): Promise<any> {
        if (window.innerWidth <= 1250) {
            this.handleInformationActionClick(nodeInformation);
        }

        let result = this.demoConfigurations.find((demoConfiguration) => demoConfiguration.id == nodeInformation.node.additionalData.demoId);

        if (result != null) {
            this.setState({
                demoConfiguration: result
            });
        } else {
            this.setState({
                demoConfiguration: null
            });
        }

        this.setState({
            selectedPage: 1
        });
    }
    
    /* Handles when the information action is clicked. */
    handleInformationActionClick(nodeInformation: ITreeNodeInformation): void {      
        let result = this.demoConfigurations.find((demoConfiguration) => demoConfiguration.id == nodeInformation.node.additionalData.demoId);
        
        if (result != null) {
            this.setState({
                informationModalVisible: true,
                informationModalTitle: result.name,
                informationModalHelpContent: result.helpContent
            });
        }
    }
    
    /* Handles closing the information modal. */
    handleInformationModalClose(): void {
        this.setState({
            informationModalVisible: false,
            informationModalTitle: "",
            informationModalHelpContent: <></>
        });
    }

    static copyDemoConfiguration(demoConfiguration: IDemoConfiguration): IDemoConfiguration {
        return {
            id: demoConfiguration.id,
            name: demoConfiguration.name,
                
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
            overlay: demoConfiguration.overlay,

            // Behavior
            useWaitCursor: demoConfiguration.useWaitCursor,
            nonSelectable: demoConfiguration.nonSelectable,
            clickBehavior: demoConfiguration.clickBehavior,
            uniqueSelection: demoConfiguration.uniqueSelection,
            autoHideActions: demoConfiguration.autoHideActions,
            showActionsOnNodeHover: demoConfiguration.showActionsOnNodeHover,
            autoCheck: demoConfiguration.autoCheck,

            // Data
            data: demoConfiguration.data,

            // Events
            onLoadDemo: demoConfiguration.onLoadDemo,
            onBeforeNodeExpand: demoConfiguration.onBeforeNodeExpand,
            onAfterNodeExpand: demoConfiguration.onAfterNodeExpand,
            onBeforeNodeSelect: demoConfiguration.onBeforeNodeSelect,
            onAfterNodeSelect: demoConfiguration.onAfterNodeSelect,

            // Children
            imageElement: demoConfiguration.imageElement,
            contentElement: demoConfiguration.contentElement,
            actionsElement: demoConfiguration.actionsElement
        }
    }

    getSplitter(): JSX.Element {
        return (
            // <div className={ `splitter` }>

            //     <div className={` splitter-line `}>

            //     </div>

            // </div>
            <></>
        )
    }

    onEditorUpdate(demoConfiguration: IDemoConfiguration): void {
        if (demoConfiguration != null) {
            this.setState({
                demoConfiguration: demoConfiguration
            });
        }
    }

    render() {        

        return (
            <div>
            <Modal isVisible={this.state.informationModalVisible} onClose={this.handleInformationModalClose}>
                <>
                    <section className={'title'}>
                        <h1>
                            { this.state.informationModalTitle } Information & Help
                        </h1>
                        <div className={'close-button-container'}>
                            <div className={'close-button'} onClick={this.handleInformationModalClose}>
                                ✖
                            </div>
                        </div>
                    </section>
                    <section className={'main'}>
                        { this.state.informationModalHelpContent != null && this.state.informationModalHelpContent}
                    </section>
                    <footer>
                        
                    </footer>
                </>
            </Modal>


                <div className={ `view-port auto-dark-mode` }>

                    <div className={ `editor-navigation` }>
                        <h1>
                            Alpha Build - ReactJS Nested List & Tree View Demo
                        </h1>
                        <a href="https://github.com/jamiehighfield/react-tree-view"><img src="https://github.com/jamiehighfield/react-tree-view/actions/workflows/node.js.yml/badge.svg"></img></a>
                    </div>

                    <div className={ `editor ${this.state.selectedPage == 0 ? ' sel-page-0' : ''} ${this.state.selectedPage == 1 ? ' sel-page-1' : ''} ${this.state.selectedPage == 2 ? ' sel-page-2' : ''} ${this.state.selectedPage == 3 ? ' sel-page-3' : ''}` }>

                        <div className={ `panel navigation` }>                            
                            <DemoNavigation navigationItems={this.state.navigationItems} onBeforeDemoConfigurationChanged={async (nodeInformation) => await this.handleDemoChanged(nodeInformation)} onDemoInformationActionClicked={this.handleInformationActionClick}></DemoNavigation>
                        </div>

                        { this.getSplitter() }

                        <div className={ `panel tree-view` }>
                            <DemoTreeView demoConfiguration={this.state.demoConfiguration}></DemoTreeView>
                        </div>

                        { this.getSplitter() }

                        <div className={ `panel appearance` }>
                            <DemoEditor demoConfiguration={this.state.demoConfiguration} onUpdate={this.onEditorUpdate}></DemoEditor>
                        </div>

                        { this.getSplitter() }

                        <div className={ `panel json-viewer` }>                            
                            <JsonViewer value={this.state.demoConfiguration.data}></JsonViewer>
                        </div>

                    </div>

                </div>

                <div className={ `editor-mobile-navigation` }>
                    
                    <div className={ `icon ${this.state.selectedPage == 0 ? ' selected' : ''}`} onClick={() => this.setState({
                        selectedPage: 0
                    })}>
                        <i className={ `fa fa-lg fa-home ` } aria-hidden="true"></i>
                        <p>
                            Home
                        </p>
                    </div>
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
                    {/* <div className={ `icon ${this.state.selectedPage == 3 ? ' selected' : ''}`} onClick={() => this.setState({
                        selectedPage: 3
                    })}>
                        <i className={ `fa fa-lg fa-cogs ` } aria-hidden="true"></i>
                        <p>
                            Settings
                        </p>
                    </div> */}
                </div>
            </div>
        );
    }
}