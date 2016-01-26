import * as Enums from "../enums";
import {Module} from "./module";

export class ModEKTranquility extends Module {
	moduleSlot: Enums.ModuleSlot;
	timesSerialized: number;
	constructor() {
		super(this);
		this.type = Enums.ItemType.Module
		this.moduleSlot = Enums.ModuleSlot.StandardE
		this.timesSerialized = 0;
	}
	serialize() {
		return {
			className: this.getClassName(),
			timesSerialized: this.timesSerialized + 1
		}
	}
	deserialize(data) {
		this.timesSerialized = data.timesSerialized || 0
	}
}

