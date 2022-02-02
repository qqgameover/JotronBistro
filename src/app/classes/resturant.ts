import { Dish } from "./dish";

export class Resturant {
	public name: string;
	public status: boolean;
	public dishList: Array<Dish>;
	constructor(restName: string, restStatus: boolean = true,
		restDishList: Array<Dish> = new Array()) {
		this.name = restName;
		this.status = restStatus;
		this.dishList = restDishList;
	}
}
