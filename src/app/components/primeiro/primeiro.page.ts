import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.page.html',
  styleUrls: ['./primeiro.page.scss'],
  standalone: true,  
  imports: [
    IonicModule
  ]
})
export class PrimeiroPage {
  constructor() {}
}
