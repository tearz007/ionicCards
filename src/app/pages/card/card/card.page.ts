import { Component, OnInit } from '@angular/core';
import { CardService} from '../../../services/card/card.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  arry
  
  constructor(private cardServise:CardService) { 
    this.arry=this.cardServise.displayCard();
  }

  ngOnInit() {
    this.arry=this.cardServise.displayCard();
  }

  deleteItem(id){
    this.cardServise.deleteItem(id);
    // console.log(id)
  }

}
