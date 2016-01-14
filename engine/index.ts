import * as Enums from"./enums";
import * as Items from "./items";
import {Inventory} from "./inventory"

export class Game {
  constructor() {
			var ekt = new Items.ModEKTranquility();
			var inv1 = new Inventory();
			inv1.add(ekt);
			var invSer = inv1.serialize();
			var inv2 = new Inventory();
			inv2.deserialize(invSer);
			console.dir(inv2.list())
  };
}
