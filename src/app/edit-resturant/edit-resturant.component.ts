import { Component, OnInit } from '@angular/core';
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
    return;
  }

}
