import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import { ITreeNodeInformation } from "../data/ITreeNodeInformation";
import { FullRowSelectionModes } from "../rendering/LayoutOptions";
import TreeView from "../components/TreeView";

const testData: ITreeNodeInformation[] = [
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
        children: []
    }
]

test("check box test", () => {
    render(

<TreeView

fullRowSelectionMode={FullRowSelectionModes.Level}
showCheckBoxes={true}
showImages={true}
showActions={true}
indent={20}
gridLines={true}
showActionsOnNodeHover={true}
data={testData}

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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flex: 1 }}>
                <span style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                        { data.node.additionalData.text }
                </span>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>
            <span style={{ color: 'rgb(126, 126, 126)', textOverflow: 'ellipsis', overflow: 'hidden' }} data-testid="content">
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

    const content: HTMLElement = screen.getByTestId("content");
    
    expect(content).toHaveTextContent(testData[0].node.additionalData.emailAddress);
});