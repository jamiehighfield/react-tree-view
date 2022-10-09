import { IDemoConfiguration } from "../helpers/demo/IDemoConfiguration";

export interface IDemoEditorComponentProps {
    demoConfiguration: IDemoConfiguration | null | undefined;
    onUpdate: EditorUpdatedDelegate;
}

export interface EditorUpdatedDelegate {
    (demoConfiguration: IDemoConfiguration): void;
}