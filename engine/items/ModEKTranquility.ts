import * as Enums from "../enums";
import {Module} from "./module";

export class ModEKTranquility extends Module {
	moduleSlot: Enums.ModuleSlot;
	constructor() {
		super(this);
		this.type = Enums.ItemType.Module
		this.moduleSlot = Enums.ModuleSlot.StandardE
	}
}

