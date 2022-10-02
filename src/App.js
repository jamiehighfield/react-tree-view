import './App.css';
import TreeView from './components/TreeView.tsx';
import { Padding } from './Utilities/Padding.ts';
import { LayoutOptions, FullRowSelectionModes } from './rendering/LayoutOptions.ts';
import { Radius } from './Utilities/Radius.ts';
import { useState } from 'react';
import { ClickBehavior } from './components/ITreeViewProps.ts';
import DemoEditor from './components/DemoEditor.tsx';
import { TreeNodeInformation } from './helpers/TreeNodeInformation';
import { JsonViewer } from '@textea/json-viewer'
import DemoNavigation from './components/DemoNavigation';
import { Demo } from './components/Demo';

const labels = ["First", "Second", "Third"];

function App() {

	const [state, setState] = useState({
		showCheckBoxes: true,
		showImages: true,
		test: true
	});
	
	const [dataStore, setData] = useState([{
		id: 0,
		node: {
			additionalData: {
				text: 'Show Images',
				emailAddress: 'Whether or not images are shown in the tree view.',
				imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-1.jpg'
			}
		},
		state: {
			isExpanded: false,
			isExpanding: false,
			isChecked: false,
			isSelected: false,
			isEnabled: false,
isIndeterminate: false,
		},
		children: [],
		properties: {
			hideChevron: true,
			hideImage: true,
			nonSelectable: true
		}
	},
	{
		id: 1,
		node: {
			additionalData: {
				text: 'John Smith',
				emailAddress: 'john.smith@domain.com',
				imageUrl: 'https://www.portotheme.com/html/porto/_9.8.0/img/team/team-2.jpg'
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
				isExpanded: false,
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
			children: []
		}
	]
	}]);

	return (
		<div className="App" style={{display:'flex',height:'100vh'}}>
			<style>
				@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
			</style>

			<Demo></Demo>

			{/* <div style={{width: '300px', height: '100vh'}}>
				<DemoNavigation></DemoNavigation>
			</div>
			<div style={{width:'16px', display: 'flex', cursor: 'w-resize'}}>
				<div style={{width: '8px', borderRight: '1px solid rgb(243, 243, 243)', display: 'inline-block'}}>

				</div>
			</div>
			<div style={{width: '450px', display: 'inline-block' }}>
				
				<TreeView

					fullRowSelectionMode={FullRowSelectionModes.Level}
					showCheckBoxes={true}
					showImages={true}
					showActions={true}
					indent={20}
					gridLines={true}
					showActionsOnNodeHover={true}
					data={dataStore}

					elementInnerPadding={{
						top: 2,
						left: 2,
						bottom: 2,
						right: 2
					}}

					onBeforeNodeExpand={async () => {
						await fetch("https://www.boredapi.com/api/activity");
						await fetch("https://www.boredapi.com/api/activity");
						await fetch("https://www.boredapi.com/api/activity");
						await fetch("https://www.boredapi.com/api/activity");
						await fetch("https://www.boredapi.com/api/activity");
						await fetch("https://www.boredapi.com/api/activity");
						await fetch("https://www.boredapi.com/api/activity");
					}}

					onDataChange={() => {
						setData([
							...dataStore
						]);
					}}>

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
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<div style={{ display: 'flex', flex: 1 }}>
									<span style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
											{ data.node.additionalData.text }
									</span>
							</div>
							<div style={{ display: 'flex', flex: 1 }}>
								<span style={{ color: 'rgb(126, 126, 126)', textOverflow: 'ellipsis', overflow: 'hidden' }}>
									{ data.state.isSelected && <span><i>selected</i> </span> }
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
			</div>
			
			<div style={{width:'16px', display: 'flex', cursor: 'w-resize'}}>
				<div style={{width: '8px', borderRight: '1px solid rgb(243, 243, 243)', display: 'inline-block'}}>

				</div>
			</div>
			<div style={{width: '400px', height: '100vh'}}>
				<DemoEditor></DemoEditor>
			</div>
			

			<div style={{width:'16px', display: 'flex', cursor: 'w-resize'}}>
				<div style={{width: '8px', borderRight: '1px solid rgb(243, 243, 243)', display: 'inline-block'}}>

				</div>
			</div>
			<div style={{width: '700px', height: '100vh', display: 'inline-block', overflow: 'auto'}}>
				<JsonViewer value={dataStore}></JsonViewer>
			</div> */}
			
		</div>
	);
}

export default App;
