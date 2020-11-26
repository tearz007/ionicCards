import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaterPage } from './stater.page';

const routes: Routes = [
  {
    path: '',
    component: StaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaterPageRoutingModule {}
