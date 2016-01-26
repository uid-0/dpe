export class ItemRegistry() {
	private map: any;
	constructor: (){
		this.map = {};
	};
	add(name:string, fnGenerate:any) {
		map[name] = fnGenerate;
	}
}