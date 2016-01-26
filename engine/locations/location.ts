import {Serializable} from "../serializable";

export class Location extends Serializable {
	constructor(l: Location) {
		super()
	}
	name: string = "<unknown>";
	description = "<no data available>";
	connectedLocations: Location[] = [];
}