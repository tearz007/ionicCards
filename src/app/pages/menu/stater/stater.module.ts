import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaterPageRoutingModule } from './stater-routing.module';

import { StaterPage } from './stater.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaterPageRoutingModule
  ],
  declarations: [StaterPage]
})
export class StaterPageModule {}
