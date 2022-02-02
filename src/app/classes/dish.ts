import { Ingridient } from "./ingridient";

export class Dish {
	public name: string;
	public ingredients: Array<Ingridient> = new Array();
	constructor(dishName: string, ingList?: Array<Ingridient> | null) {
		this.name = dishName;
		if (ingList) this.ingredients = ingList;
	}
}
