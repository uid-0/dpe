import * as Enums from "../enums";
import {Serializable} from "../serializable";

export class Item extends Serializable {
	name: string
	type: Enums.ItemType;
	constructor(parent: Item) { super(); }

}