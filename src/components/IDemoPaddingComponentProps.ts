import { Padding } from "../Utilities/Padding";

export interface IDemoPaddingComponentProps {
    padding: Padding;
    onChanged: DemoPaddingChangedDelegate;
}

export interface DemoPaddingChangedDelegate {
    (padding: Padding): void;
}