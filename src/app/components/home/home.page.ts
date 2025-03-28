import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';  
import { SegundoComponent } from '../segundo/segundo.component'; //aq eu to importando o segundo component, que é o que eu quero usar na home

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true, 
  imports: [
    IonicModule,       
    SegundoComponent   //aq eu chamo o segundo componente pela variavel dali de cima
  ]
})
export class HomePage {
  constructor(private router: Router) {}

  goToPrimeiro() {//lembra q a gnt chamou essa funcao lá no home.page.html? ent, a unica coisa q ela ta fznd, é redirecionar
    this.router.navigate(['/primeiro']);
  }

//e aqui a gente ta criando um array pra poder passar os dados pro segundo component, mas esses dados seriam do back, tlgd?
      itens=[
        {
          id: 1,
          name: '1fs',
          description: 'descriptiontrduyfugkhjiyftdiffyujhhvyyu',
        },
        {
          id: 2,
          name: '2ved',
          description: '7d6tfiyug',
        },
        {
          id: 3,
          name: '3ere',
          description: 'aaaaaaaaaaaaaaaaa',
        }
      ]
    
  
}
