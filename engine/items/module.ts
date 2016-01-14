import * as Enums from "../enums";
import {Item} from "./item";

export class Module extends Item {
	moduleSlot: Enums.ModuleSlot;
	constructor(parent: Item) {
		super(this);
		this.type = Enums.ItemType.Module
		this.moduleSlot = Enums.ModuleSlot.StandardE
	}
}

