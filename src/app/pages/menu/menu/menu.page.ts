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
count
foodlist=[]
array=[ "../../../../assets/kota_Img/img1.jpg","../../../../assets/kota_Img/img2.jpg","../../../../assets/kota_Img/img3.jpg","../../../../assets/kota_Img/img4.jpg","../../../../assets/kota_Img/img5.jpg","../../../../assets/kota_Img/img1.jpg",]
  constructor(public cardServise:CardService, private route:Router) { 
    this.count= this.cardServise. count();
    this.foodlist=this.cardServise.displayCard();
  }

  ngOnInit() {
    this.count= this.cardServise. count();
  }

  submit(index){
    // let infor={name:this.name,surname:this.sName}
    let container={}
    for (let i = 0; i < this.array.length; i++) {
      if(index==i){
        let individualCount=1
 
        //indevidual count
       for (let x = 0; x < this.foodlist.length; x++) {
            if(this.array[i]===this.foodlist[x].img){
             individualCount=individualCount+1;
             console.log(individualCount)
            }else{
              
            }
        } 
        container={img:this.array[i],count:individualCount}
        this.cardServise.addCard(container)
        //total count
        this.cardServise.counter=this.cardServise.counter+1;
      }
    }
    
    this.count= this.cardServise.counter
  }

  view(){
   let arry=this.cardServise.displayCard();

    for (let i = 0; i< arry.length; i++) {
    // console.log(arry[i]); 
    }
    this.route.navigate(['side-menu/card'])
  }
}
