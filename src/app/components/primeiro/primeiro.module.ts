import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeiroPageRoutingModule } from './primeiro-routing.module';

import { PrimeiroPage } from './primeiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeiroPageRoutingModule
  ],
})
export class PrimeiroPageModule {}
