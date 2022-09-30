import React from "react";
import "./DemoPadding.scoped.scss";
import { IDemoPaddingComponentProps } from "./IDemoPaddingComponentProps";
import { IDemoPaddingComponentState } from "./IDemoPaddingComponentState";

export class DemoPadding extends React.Component<IDemoPaddingComponentProps, IDemoPaddingComponentState> {
    constructor(props: IDemoPaddingComponentProps) {
        super(props);

        this.state = {
            padding: this.props.padding
        };
    }

    handleChanged(): void {
        if (this.props.onChanged != null) {
            this.props.onChanged(this.state.padding);
        }
    }
    
    render() {
        return (
            <div className={ `padding-editor` }>
                <input type="number" placeholder="Top" min="0" max="50" value={this.state.padding.top} onChange={(e) => {
                    this.setState((previousState) => {
                        return {
                            ...previousState,
                            padding: {
                                ...previousState.padding,
                                top: e.target.valueAsNumber
                            }
                        };
                    }, () => {
                        this.handleChanged();
                    });
                }}></input>
                <input type="number" placeholder="Left" min="0" max="50" value={this.state.padding.left} onChange={(e) => {
                    this.setState((previousState) => {
                        return {
                            ...previousState,
                            padding: {
                                ...previousState.padding,
                                left: e.target.valueAsNumber
                            }
                        };
                    }, () => {
                        this.handleChanged();
                    });
                }}></input>
                <input type="number" placeholder="Bottom" min="0" max="50" value={this.state.padding.bottom} onChange={(e) => {
                    this.setState((previousState) => {
                        return {
                            ...previousState,
                            padding: {
                                ...previousState.padding,
                                bottom: e.target.valueAsNumber
                            }
                        };
                    }, () => {
                        this.handleChanged();
                    });
                }}></input>
                <input type="number" placeholder="Right" min="0" max="50" value={this.state.padding.right} onChange={(e) => {
                    this.setState((previousState) => {
                        return {
                            ...previousState,
                            padding: {
                                ...previousState.padding,
                                right: e.target.valueAsNumber
                            }
                        };
                    }, () => {
                        this.handleChanged();
                    });
                }}></input>
            </div>
        );
    }
}

export default DemoPadding;