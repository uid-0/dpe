import * as items from "./items";

export class Inventory {
	private items: [items.Item];
	constructor() {

	}
	add(item: items.Item) {
		if (!this.items) {
			this.items = [item];
		} else {
			this.items.push(item);
		}
	}
	remove(item: items.Item) {

	}
	list() {
		return this.items;
	}
	serialize() {
		var data = [];
		this.items.forEach(function(value) {
			data.push(value.serialize())
		})
		return data;
	}
	deserialize(data: any) {
		const that = this;
		data.forEach(function(value) {
			if (typeof items[value.className] !== undefined) {
				var item = new items[value.className]();
				item.deserialize(value);
				that.add(item);
			}
		})
	}
}