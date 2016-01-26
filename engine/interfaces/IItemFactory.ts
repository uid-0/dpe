import {Item} from "../items";

export interface IItemFactory {
	factoryForType(typeName: string): boolean
	create(typeName: string): Item
}