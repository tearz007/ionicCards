import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesertPage } from './desert.page';

const routes: Routes = [
  {
    path: '',
    component: DesertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesertPageRoutingModule {}
