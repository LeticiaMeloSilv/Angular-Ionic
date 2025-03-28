import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.page.html',
  styleUrls: ['./primeiro.page.scss'],
  standalone: true,  //presta atenção nessa parte, pq ela ta dizendo q esse componente é standalone, ou seja, ele não precisa de um modulo pra ser chamado 
  imports: [
    IonicModule
  ]
})
export class PrimeiroPage {
  constructor() {}
}
