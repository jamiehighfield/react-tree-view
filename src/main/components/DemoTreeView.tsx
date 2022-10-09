import React from "react";
import { ITreeNodeInformation } from "../data/ITreeNodeInformation";
import { IDemoTreeViewComponentProps } from "./IDemoTreeViewComponentProps";
import { IDemoTreeViewComponentState } from "./IDemoTreeViewComponentState";
import TreeView from "./TreeView";

export class DemoTreeView extends React.Component<IDemoTreeViewComponentProps, IDemoTreeViewComponentState> {
    constructor(props: IDemoTreeViewComponentProps) {
        super(props);

		this.state = {
			demoConfiguration: this.props.demoConfiguration
		};
    }

	/* Handles the component updating via props. */
	componentDidUpdate(prevProps: Readonly<IDemoTreeViewComponentProps>, prevState: Readonly<IDemoTreeViewComponentState>, snapshot?: any): void {
		if (this.props.demoConfiguration != prevState.demoConfiguration) {
			this.setState({
				demoConfiguration: this.props.demoConfiguration
			});
		}
	}

	/* Handles the before node expand event. */
	async handleBeforeNodeExpand(nodeInformation: ITreeNodeInformation): Promise<any> {
		if (this.state.demoConfiguration?.onBeforeNodeExpand != null) {
			await this.state.demoConfiguration.onBeforeNodeExpand(nodeInformation);
		}
	}

	/* Handles the after node expand event. */
	async handleAfterNodeExpand(nodeInformation: ITreeNodeInformation): Promise<any> {
		if (this.state.demoConfiguration?.onAfterNodeExpand != null) {
			await this.state.demoConfiguration.onAfterNodeExpand(nodeInformation);
		}
	}

	/* Handles the before node select event. */
	async handleBeforeNodeSelect(nodeInformation: ITreeNodeInformation): Promise<any> {
		if (this.state.demoConfiguration?.onBeforeNodeSelect != null) {
			await this.state.demoConfiguration.onBeforeNodeSelect(nodeInformation);
		}
	}

	/* Handles the after node select event. */
	async handleAfterNodeSelect(nodeInformation: ITreeNodeInformation): Promise<any> {
		if (this.state.demoConfiguration?.onAfterNodeSelect != null) {
			await this.state.demoConfiguration.onAfterNodeSelect(nodeInformation);
		}
	}

	/* Main render method. */
    render() {

        return (
			<>
            	{ this.props.demoConfiguration != null && (
				
				<TreeView
					// Appearance
					elementOuterPadding={this.state.demoConfiguration?.elementOuterPadding}
					elementInnerPadding={this.state.demoConfiguration?.elementInnerPadding}
					imagePadding={this.state.demoConfiguration?.imagePadding}
					textPadding={this.state.demoConfiguration?.textPadding}
					borderRadius={this.state.demoConfiguration?.borderRadius}
					fullRowSelectionMode={this.state.demoConfiguration?.fullRowSelectionMode}
					showCheckBoxes={this.state.demoConfiguration?.showCheckBoxes}
					showImages={this.state.demoConfiguration?.showImages}
					showChevrons={this.state.demoConfiguration?.showChevrons}
					showActions={this.state.demoConfiguration?.showActions}
					indent={this.state.demoConfiguration?.indent}
					gridLines={this.state.demoConfiguration?.gridLines}
					overlay={this.state.demoConfiguration?.overlay}
					overlayScrollBar={false}
					dragSelection={true}

					// Behavior
					useWaitCursor={this.state.demoConfiguration?.useWaitCursor}
					nonSelectable={this.state.demoConfiguration?.nonSelectable}
					clickBehavior={this.state.demoConfiguration?.clickBehavior}
					uniqueSelection={this.state.demoConfiguration?.uniqueSelection}
					autoHideActions={this.state.demoConfiguration?.autoHideActions}
					showActionsOnNodeHover={this.state.demoConfiguration?.showActionsOnNodeHover}
					autoCheck={this.state.demoConfiguration?.autoCheck}

					// Data
					data={this.state.demoConfiguration?.data}

					// Events
					onBeforeNodeExpand={async (nodeInformation) => await this.handleBeforeNodeExpand(nodeInformation)}
					onAfterNodeExpand={async (nodeInformation) => await this.handleAfterNodeExpand(nodeInformation)}
					onBeforeNodeSelect={async (nodeInformation) => await this.handleBeforeNodeSelect(nodeInformation)}
					onAfterNodeSelect={async (nodeInformation) => await this.handleAfterNodeSelect(nodeInformation)}>

					<TreeView.Image>
						{
							this.state.demoConfiguration?.imageElement
						}
					</TreeView.Image>
					<TreeView.Content>
						{
							this.state.demoConfiguration?.contentElement
						}
					</TreeView.Content>
					<TreeView.Actions>
						{
							this.state.demoConfiguration?.actionsElement
						}
					</TreeView.Actions>

            	</TreeView>
				
				)}
			</>
        );
    }
}

export default DemoTreeView;