export class TreeNodeInformation {
    constructor(text: string) {
        this._text = text;
    }

    private _text: string;

    public get Text() {
        return this._text;
    }
}