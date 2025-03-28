import { Component, OnInit, Input } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
  //esse componente nn é standalone, pq ele precisa de um modulo pra ser chamado, então a gente tem q importar os componentes do ionic aqui

})

export class SegundoComponent  implements OnInit {
  constructor() { }
  @Input("dados") itens!: any;// aqui eu to pegando os dados que eu passei la do home.page.ts, e to chamando de itens, mas poderia ser qualquer coisa

  ngOnInit() {}

}
