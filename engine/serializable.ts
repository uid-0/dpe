export abstract class Serializable {
		serialize(): any {
			return {
				className: this.getClassName()
			}
		}
		deserialize(data: any) {}
		protected getClassName() {
			var funcNameRegex = /function (.{1,})\(/;
			var results  = (funcNameRegex).exec(this["constructor"].toString());
			return (results && results.length > 1) ? results[1] : "";
		}
}