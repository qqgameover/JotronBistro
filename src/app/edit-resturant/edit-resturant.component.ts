import { Component, OnInit } from '@angular/core';
import { Dish } from '../classes/dish';
import { Resturant } from '../classes/resturant';
import { ResturantsService } from '../resturants.service';

@Component({
  selector: 'app-edit-resturant',
  templateUrl: './edit-resturant.component.html',
  styleUrls: ['./edit-resturant.component.css']
})
export class EditResturantComponent implements OnInit {
  public selectedRestaurant: Resturant | null = null;

  constructor(private resService: ResturantsService) { }
  ngOnInit(): void {
    this.selectedRestaurant = this.resService.getSelectedRes();
  }
  editRest(restName: string, restStatus: boolean): void {
    this.resService.getSelectedRes().name = restName;
    this.resService.getSelectedRes().status = restStatus;
  }
  deleteRest(rest: Resturant): void {
    this.resService.deleteRest(rest);
  }
  deleteDish(rest: Resturant, dish: Dish): void {
    this.resService.deleteDish(rest, dish);
  }
  setSelectedDish(dish: Dish): void {
    this.resService.setSelectedDish(dish);
  }
  addNewDish(): void {
    var dish = new Dish("");
    this.resService.getSelectedRes().dishList.push(dish);
    this.resService.setSelectedDish(dish);
  }
  getTotalDishPrice(dish: Dish): number {
    return dish.getTotalDishPrice();
  }

}
