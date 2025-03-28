import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',//aq é o caminho que vai ser acessado
    //o path vazio significa que ele vai ser acessado na raiz do app, ou seja, quando o app abrir, ele vai abrir essa pagina
    component: HomePage,//aq a gente ta dizendo que o componente que vai ser carregado quando o path for acessado é o HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
