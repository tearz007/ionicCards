import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
 
  foodList=[]
  constructor() { }

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

}
