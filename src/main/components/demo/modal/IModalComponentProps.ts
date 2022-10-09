export interface IModalComponentProps {
    children: JSX.Element;
    isVisible: boolean;
    onClose: CloseDelegate;
}

export interface CloseDelegate {
    (): void;
}