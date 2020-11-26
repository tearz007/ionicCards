import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CardService {
 
  foodList=[]
  counter=0
  constructor(private route:Router) { }

  addCard(food){
   this.foodList.push(food);
  }

  deleteItem(id){
   for (let i = 0; i < this.foodList.length; i++) {
    if(id==i){
      console.log(i)
     this.foodList.splice(i, 1) 
    }
   }
  }

  displayCard(){
    return this.foodList;
  }
  reloadComponent(routes) {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([routes]);
  }
  count(){
    return this.counter
  }


}
