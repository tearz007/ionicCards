import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { CardService} from '../../../services/card/card.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
name 
sName
  constructor(private cardServise:CardService, private route:Router) { }

  ngOnInit() {
  }

  submit(){
    let infor={name:this.name,surname:this.sName}
    this.cardServise.addCard(infor)
  }

  view(){
    let arry=this.cardServise.displayCard();
    for (let i = 0; i< arry.length; i++) {
     console.log(arry[i]); 
    }
    this.route.navigate(['card'])
  }
}
