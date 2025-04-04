import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Teste } from '../../interfaces/teste';

@Injectable({
  providedIn: 'root',
})

export class ObservableService {

  constructor() { }

  private dadosSubject = new BehaviorSubject<Teste>({ id: 1, nome: 'João' });//criando um observable de qualquer tipo que recebe um objeto do tipo teste, que é uma interface que eu criei, e o valor inicial é um objeto com id 1 e nome João
  // O BehaviorSubject é um tipo especial de Subject que armazena o valor atual e emite esse valor para novos assinantes
  dados$ = this.dadosSubject.asObservable();

  setDados(dados: any) {// aqui eu to criando uma funcao que vai receber um objeto e vai atualizar o valor do observable
    this.dadosSubject.next(dados);
    console.log(dados);
  }
  
}
