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
  changeStatus(index: number): void {
    this.resService.changeStatus(index);
    this.resturantList = this.resService.getRestList();
  }
  splitArrayIntoChunks(arr: Array<Resturant>, len: number) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += len))
    }
    return chunks;
  }
  changeSelectedRest(index: number): void {
    var selected: Resturant = this.resturantList[index];
    this.resService.setSelectedRes(selected);
  }

}
