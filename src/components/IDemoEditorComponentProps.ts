import { IDemoConfiguration } from "../helpers/demo/IDemoConfiguration";

export interface IDemoEditorComponentProps {
    demoConfiguration: IDemoConfiguration;
    onUpdate: EditorUpdatedDelegate;
}

export interface EditorUpdatedDelegate {
    (demoConfiguration: IDemoConfiguration): void;
}