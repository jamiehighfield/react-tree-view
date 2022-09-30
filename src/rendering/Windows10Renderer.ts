import { Color } from "../Utilities/Color";
import { IRenderer } from "./IRenderer";

class Windows10Renderer implements IRenderer {
    getBackgroundColor(): Color {
        return "rgb(255, 255, 255)";
    }
    getChevronColor(): Color {
        return "rgb(166, 166, 166)";
    }
    getMouseOverColor(): Color {
        return "#F8F8F8";
    }
    getChevronMouseOverColor(): Color {
        return "rgb(64, 64, 64)";
    }
}

export default Windows10Renderer;