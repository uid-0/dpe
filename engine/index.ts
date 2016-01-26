import * as Enums from"./enums";
import * as Items from "./items";
import {Player} from "./player";

export class Game {
  constructor() {
  	this.player = new Player();
  	this.player.inventory.add(new Items.ModEKTranquility());
  	console.dir(this.player.serialize());
  };
  player: Player;
}
