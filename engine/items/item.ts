import * as Enums from "../enums";

export class Item {
	name: string
	type: Enums.ItemType;
	constructor(parent: Item) { }
	serialize() {
		return {
			className: this.getClassName()
		}
	}
	deserialize() {}
	private getClassName() {
    var funcNameRegex = /function (.{1,})\(/;
    var results  = (funcNameRegex).exec(this["constructor"].toString());
    return (results && results.length > 1) ? results[1] : "";
	}
}