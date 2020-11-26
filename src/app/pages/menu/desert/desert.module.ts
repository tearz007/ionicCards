import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesertPageRoutingModule } from './desert-routing.module';

import { DesertPage } from './desert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesertPageRoutingModule
  ],
  declarations: [DesertPage]
})
export class DesertPageModule {}
