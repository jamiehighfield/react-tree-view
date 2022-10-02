import { Color } from "../Utilities/Color";

export interface IRenderer {
    getBackgroundColor(): Color;
    getChevronColor(): Color;
    getMouseOverColor(): Color;
    getChevronMouseOverColor(): Color;
    
    
}