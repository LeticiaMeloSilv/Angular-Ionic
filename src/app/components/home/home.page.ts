import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';  
import { SegundoComponent } from '../segundo/segundo.component'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true, 
  imports: [
    IonicModule,       
    SegundoComponent   
  ]
})
export class HomePage {
  constructor(private router: Router) {}

  goToPrimeiro() {
    this.router.navigate(['/primeiro']);
  }


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
