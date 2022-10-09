import { IDemoConfiguration } from "../../../helpers/demo/IDemoConfiguration";

export interface IDemo {
    getDemoConfiguration(): IDemoConfiguration;
}