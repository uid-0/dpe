import * as items from "./items";
import {IItemFactory} from "./interfaces/IItemFactory.ts";

export class Inventory {
	private factories: IItemFactory[] = [];
	private items: items.Item[] = [];
	constructor() {
		this.factories.push(new VanillaItemFactory());
	}
	add(item: items.Item) {
		this.items.push(item);
	}
	remove(item: items.Item) {

	}
	list() {
		return this.items;
	}
	serialize() {
		var data = [];
		this.items.forEach(function(value) {
			data.push(value.serialize());
		});
		return data;
	}
	deserialize(data: any[]) {
		const that = this;
		data.forEach(function(record) {
			var foundOne = false;
			that.factories.forEach(function(factory) {
				if (foundOne) {
          return;
        }
				if (factory.factoryForType(record.className)) {
					var item = factory.create(record.className);
					item.deserialize(record);
					foundOne = true;
					that.add(item);
				}
			});
			if (!foundOne) {
        throw new Error("Cannot find factory for item " + record.className);
      }
		});
	}
}

class VanillaItemFactory implements IItemFactory {
	factoryForType(typeName: string): boolean {
		if (items[typeName]) {
      return true;
    } else {
      return false;
    }
	}
	create(typeName): items.Item {
		return new items[typeName]();
	}
}
