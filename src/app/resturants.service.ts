import { Injectable } from '@angular/core';
import { Dish } from './classes/dish';
import { Ingridient } from './classes/ingridient';
import { Resturant } from './classes/resturant';

@Injectable({
  providedIn: 'root'
})
export class ResturantsService {
  private resturantList: Array<Resturant> = new Array();
  private selectedRes!: Resturant;
  public selectedDish!: Dish;
  constructor() {
    this.resturantList.push(new Resturant("Jotron Larvik", true, 
    [new Dish("Pizza ala Kasper", [new Ingridient("Dough", 30), 
    new Ingridient("Cheese", 10), new Ingridient("Minced Meat", 1)]),
    new Dish("Lame Pasta", [
      new Ingridient("Pasta", 2),
      new Ingridient("Minced Meat", 3, 2)]),
    new Dish("Pasta Carbonara", [
      new Ingridient("Pasta", 1),
      new Ingridient("Egg", 1, 2),
      new Ingridient("Minced Meat", 3)])]))

    this.resturantList.push(new Resturant("Dunno", true, 
    [new Dish("Pizza ala Richard", [new Ingridient("Dough", 30), 
    new Ingridient("Cheese", 10), new Ingridient("Minced Meat", 1)]),
    new Dish("Super Pasta", [
      new Ingridient("Pasta", 2),
      new Ingridient("Minced Meat", 3, 2)]),
    new Dish("Pasta Brke", [
      new Ingridient("Pasta", 1),
      new Ingridient("Egg", 1, 2),
      new Ingridient("Minced Meat", 3)])]))
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
  public getSelectedDish(): Dish {
    return this.selectedDish;
  }
  public setSelectedRes(selected: Resturant): void {
    this.selectedRes = selected;
  }
  public setSelectedDish(selected: Dish): void {
    this.selectedDish = selected;
  }
  public editSelectedRes(oldRest: Resturant, newRest: Resturant): void {
    var tempArr: Array<Resturant> = new Array();
    this.resturantList.forEach(e => {
      if(e == oldRest) tempArr.push(newRest); 
      else tempArr.push(e);
    });
    this.resturantList = tempArr;
  }
  public deleteRest(rest: Resturant) {
    var tempArr: Array<Resturant> = this.resturantList.filter((r) => {
      return r !== rest;
    }) 
    this.resturantList = tempArr;
  }
  public addDish(rest: Resturant, dish: Dish): void {
    var tempRest = rest;
    tempRest.dishList.push(dish);
    this.editSelectedRes(rest, tempRest);
  }
  public deleteDish(rest: Resturant, dish: Dish): void {
    var tempArr: Array<Dish> = rest.dishList.filter((d) => {
      return d !== dish;
    })
    this.selectedRes.dishList = tempArr;
  }
  public deleteIngridient(dish: Dish, ingrident: Ingridient): void {
    var tempArr: Array<Ingridient> = dish.ingredients.filter((d) => {
      return d !== ingrident;
    })
    dish.ingredients = tempArr;
  }
  public addIngridient(dish: Dish, ingrident: Ingridient): void {
    dish.ingredients.push(ingrident);
  }
}
