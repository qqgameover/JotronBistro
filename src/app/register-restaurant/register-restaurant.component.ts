import { Component, OnInit } from '@angular/core';
import { Resturant } from '../classes/resturant';
import { ResturantsService } from '../resturants.service';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})
export class RegisterRestaurantComponent implements OnInit {

  constructor(public resService: ResturantsService) { }

  ngOnInit(): void {
  }

  addRest(restName: string, restStatus: boolean): void {
    this.resService.addRestToList(new Resturant(restName, restStatus));
  }

}
