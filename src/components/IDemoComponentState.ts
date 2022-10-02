import { IDemoConfiguration } from "../helpers/demo/IDemoConfiguration";

export interface IDemoComponentState {
    demoConfiguration: IDemoConfiguration;
    selectedPage: number;
}