import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeiroPage } from './primeiro.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeiroPageRoutingModule {}
