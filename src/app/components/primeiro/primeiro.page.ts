import { Storage } from '@ionic/storage-angular';
import { StorageService } from './../../service/storage/storage.service';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  
import { ObservableService } from '../../service/observable/observable.service'; // Importando o serviço
import { BehaviorSubject, interval } from 'rxjs';
import { Router } from '@angular/router';
// Removed standalone import of IonAlert to avoid duplicate component error

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.page.html',
  styleUrls: ['./primeiro.page.scss'],
  standalone: true,  //presta atenção nessa parte, pq ela ta dizendo q esse componente é standalone, ou seja, ele não precisa de um modulo pra ser chamado 
  imports: [
    IonicModule,
    // Removed IonAlert from imports to avoid duplicate component error
  ]
})

export class PrimeiroPage {
  dadosaq$: BehaviorSubject<any>;
  //aqui eu to criando uma variavel que vai receber os dados do observable service, e ela é do tipo Observable, pq o serviço ta retornando um observable
  //ou seja, quando eu for usar essa variavel, eu vou ter q usar o subscribe pra poder pegar os dados

  constructor(private dataService: ObservableService, private storageService: StorageService, private router: Router) {// aq eu to injetando o serviço no construtor, pra poder usar ele
    //aqui eu to chamando o serviço e pegando os dados dele, e to passando pra variavel dados$
    this.dadosaq$ = new BehaviorSubject<any>(this.dataService.dados$); // Inicializa o BehaviorSubject com os dados do serviço
   }
///////////// ALERT ///////////////////////
   isAlertOpen = false;
   alertButtons = ['Action'];
 
   setOpen(isOpen: boolean) {
     this.isAlertOpen = isOpen;
   }
/////////////////// RETORNO OBSERVABLE /////////////////////////
  goToHome() {
    //essa funcao ta crianddo um novo json , em seguida ta mandando pra dentro do observable que foi definido anteriormente, e dps navega pra tela home
    const novosDados = [
      { "id": 3, "nome": "novo teste"},
      { "id": 4, "nome": "teste atualizado" }
    ];
    // this.dadosaq$.next(novosDados); // Atualiza os dados
    this.dataService.setDados(novosDados)
    this.dadosaq$.subscribe(dados => {
      console.log(dados);  
      console.log(dados.source._value);  
    });//aq a gnt ta subscribando no observable, ou seja, toda vez que o valor do observable mudar, essa funcao vai ser chamada e vai imprimir os dados no console
   
    this.storageFunc()
   
    this.router.navigate(['/home']);
  }
/////////////////////// RETORNO STORAGE /////////////////////////////////
  storageFunc(){
    this.storageService.saveData('teste', 'teste');
    this.storageService.getData('teste').then((value) => {
      if (value === null) {
      console.warn('No data found for the key "teste".');
      } else {
      console.log(value); // Imprime o valor armazenado
      }
    }).catch((error) => {
      console.error('Error retrieving data', error);
    });
  }
}
