

class Duelton {
	constructor(){

		if(!Duelton.instance){
			return Duelton.instance = this;
		}
		return Duelton.instance;

	}
}
const inst1 = new Duelton();
const inst2 = new Duelton();


if(inst1 == inst2){
console.log("Done Singleton");
}
