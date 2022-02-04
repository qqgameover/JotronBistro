import { Component, OnInit } from '@angular/core';
import { Resturant } from '../classes/resturant';
import { ResturantsService } from '../resturants.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public resService: ResturantsService) { }
  segmentList?: Array<Array<Resturant>>;
  resturantList: Array<Resturant> = new Array();
  ngOnInit(): void {
    this.resturantList = this.resService.getRestList();
    this.segmentList = this.splitArrayIntoChunks(this.resturantList, 3);
  }
  splitArrayIntoChunks(arr: Array<Resturant>, len: number) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += len))
    }
    return chunks;
  }
  changeSelectedRest(resturant: Resturant): void {
    this.resService.setSelectedRes(resturant);
  }

}
