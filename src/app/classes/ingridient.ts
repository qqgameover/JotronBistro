export class Ingridient {
	public name: string;
	public price: number;
	public amount: number;
	constructor(ingName: string, ingPrice: number, ingAmount: number = 1) {
		this.name = ingName;
		this.price = ingPrice;
		this.amount = ingAmount;
	}
}
