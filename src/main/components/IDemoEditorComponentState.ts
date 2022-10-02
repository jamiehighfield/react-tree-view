import { IDemoConfiguration } from "../helpers/demo/IDemoConfiguration";

export interface IDemoEditorComponentState {
    demoConfiguration: IDemoConfiguration;

    indent: number;
}