import React from "react";
import { IModalComponentProps } from "./IModalComponentProps";
import { IModalComponentState } from "./IModalComponentState";
import "./Modal.scoped.scss";

export class Modal extends React.Component<IModalComponentProps, IModalComponentState> {
    constructor(props: IModalComponentProps) {
        super(props);
        
        this.handleOverlayClick = this.handleOverlayClick.bind(this);

        this.state = {
            isVisible: this.props.isVisible
        };
    }
        
    /* Handles the component update via props. */
    componentDidUpdate(prevProps: Readonly<IModalComponentProps>, prevState: Readonly<IModalComponentState>, snapshot?: any): void {
        if (this.props.isVisible != prevState.isVisible) {
            this.setState({
                isVisible: this.props.isVisible
            });
        }
    }
    
    /* Handles closing the modal. */
    handleOverlayClick(): void {
        if (this.props.onClose != null) {
            this.props.onClose();
        }
    }

    render() {
        return (
            <>
                <div className={ `modal-container ${this.state.isVisible ? 'shown' : ''}` } onClick={this.handleOverlayClick}>
                    
                    <div className={ 'modal-overlay' }>

                    </div>

                </div>
                        
                <div className={ `modal ${this.state.isVisible ? 'shown' : ''}` }>
                    {
                        this.props.children
                    }
                </div>
            </>
        )
    }
}

export default Modal;