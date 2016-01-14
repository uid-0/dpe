import * as Enums from "../enums";
import {Item} from "./item";

export class Consumable extends Item {
	constructor(parent: Item) {
		super(this);
		this.type = Enums.ItemType.Consumable;
	}
}