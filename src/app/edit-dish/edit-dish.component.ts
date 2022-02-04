import { Component, OnInit } from '@angular/core';
import { Dish } from '../classes/dish';
import { Ingridient } from '../classes/ingridient';
import { ResturantsService } from '../resturants.service'

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.css']
})
export class EditDishComponent implements OnInit {

  public selectedDish!: Dish;
  constructor(private resService: ResturantsService) { }

  ngOnInit(): void {
    this.selectedDish = this.resService.getSelectedDish();
  }
  
  public deleteIngrident(ingrident: Ingridient): void {
    this.resService.deleteIngridient(this.selectedDish, ingrident);
  }
  public addIngrident(name: string, price: string, amount: string): void {
    if(!name || !price || (!name && !price)) return;
    var intprice: number = +price;
    var intamount: number = +amount;
    var ing: Ingridient = new Ingridient(name, intprice, intamount);
    this.resService.addIngridient(this.selectedDish, ing);

  }

}
