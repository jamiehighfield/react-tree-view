import { Padding } from "../Utilities/Padding"
import { Radius } from "../Utilities/Radius";

export class LayoutOptions {
    constructor(elementOuterPadding: Padding, elementInnerPadding: Padding, textPadding: Padding, imagePadding: Padding, elementRadius: Radius, fullRowSelectionMode: FullRowSelectionModes, indent: number) {
        this._elementOuterPadding = elementOuterPadding;
        this._elementInnerPadding = elementInnerPadding;
        this._textPadding = textPadding;
        this._imagePadding = imagePadding;
        this._elementRadius = elementRadius;
        this._fullRowSelectionMode = fullRowSelectionMode;
        this._indent = indent;
    }

    private _elementOuterPadding: Padding;
    private _elementInnerPadding: Padding;
    private _textPadding: Padding;
    private _imagePadding: Padding;
    private _elementRadius: Radius;
    private _fullRowSelectionMode: FullRowSelectionModes;
    private _indent: number;

    public get ElementOuterPadding() {
        return this._elementOuterPadding;
    }
    public get ElementInnerPadding() {
        return this._elementInnerPadding;
    }
    public get TextPadding() {
        return this._textPadding;
    }
    public get ImagePadding() {
        return this._imagePadding;
    }
    public get ElementRadius() {
        return this._elementRadius;
    }
    public get FullRowSelectionMode() {
        return this._fullRowSelectionMode;
    }
    public get Indent() {
        return this._indent;
    }
    public set Indent(value: number) {
        this._indent = value;
    }
}

export enum FullRowSelectionModes {
    Content = 0,
    Level = 1,
    Full = 2
}