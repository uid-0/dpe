import {Inventory} from "./inventory";
import {Serializable} from "./serializable";

export class Player extends Serializable {
	public inventory: Inventory;
	constructor() {
		super();
		this.inventory = new Inventory();
	}
	serialize() {
		return {
			inventory: this.inventory.serialize()
		}
	}
	deserialize(save: any) {
		this.inventory.deserialize(save.inventory);
	}
}