import { Injectable } from '@angular/core';
import { Resturant } from './classes/resturant';

@Injectable({
  providedIn: 'root'
})
export class ResturantsService {
  private resturantList: Array<Resturant> = new Array();
  private selectedRes!: Resturant;
  constructor() {
    this.resturantList.push(new Resturant("Jotron Larvik"))
  }
  public getRestList(): Array<Resturant> {
    return this.resturantList;
  }
  public addRestToList(rest: Resturant) {
    this.resturantList.push(rest);
  }
  public changeStatus(index: number) {
    this.resturantList[index].status = !this.resturantList[index].status;
  }
  public getSelectedRes(): Resturant {
    return this.selectedRes;
  }
  public setSelectedRes(selected: Resturant): void {
    this.selectedRes = selected;
  }
}
