import { Ingridient } from "./ingridient";

export class Dish {
	public name: string;
	public ingredients: Array<Ingridient> = new Array();
	constructor(dishName: string, ingList?: Array<Ingridient> | null) {
		this.name = dishName;
		if (ingList) this.ingredients = ingList;
	}
  getTotalDishPrice(): number {
    var total = this.ingredients.reduce((prev, curr) => {
      return prev + curr.price * curr.amount;
    }, 0)
    return +((total / 100) * 120).toFixed(2);
  }
}
