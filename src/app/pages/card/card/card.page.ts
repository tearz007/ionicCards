import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../services/card/card.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  arry
  count
  countIndivitual
  constructor(private cardServise: CardService) {
    this.arry = this.cardServise.displayCard();
    this.count = this.cardServise.counter;
  }

  ngOnInit() {
    this.arry = this.cardServise.displayCard();
  }

  deleteItem(id) {
    this.cardServise.deleteItem(id);
    this.count = this.count - 1;
    this.cardServise.counter = this.count
    console.log("count" + this.cardServise.count())

    //this.cardServise.reloadComponent('menu')
  }


  add(index) {
    for (let i = 0; i < this.arry.length; i++) {

      if (index == i) {
        this.arry[index].count = this.arry[index].count + 1
      }
    }
  }
  substract(index) {

    for (let i = 0; i < this.arry.length; i++) {
      if (this.arry[index].count > 0) {
        if (index == i) {
          this.arry[index].count = this.arry[index].count - 1
        }
      }

    }
  }
}
