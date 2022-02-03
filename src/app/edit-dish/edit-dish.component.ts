import { Component, OnInit } from '@angular/core';
import { Dish } from '../classes/dish';
import { ResturantsService } from '../resturants.service';

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

}
