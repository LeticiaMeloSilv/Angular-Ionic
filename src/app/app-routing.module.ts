import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './components/home/home.page';
import { PrimeiroPage } from './components/primeiro/primeiro.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)// aqui a gente ta dizendo que o caminho 'home' vai carregar o modulo HomePageModule
  },
  {
    path: '',
    redirectTo: 'home',// aqui a gente ta dizendo que quando o app abrir, ele vai redirecionar pra pagina home
    pathMatch: 'full'
  },
  {
    path: 'primeiro',
    loadChildren: () => import('./components/primeiro/primeiro.module').then( m => m.PrimeiroPageModule)// aqui a gente ta dizendo que o caminho 'primeiro' vai carregar o modulo PrimeiroPageModule
  },
];
// resumo, todos os caminhos que a gente ta criando aqui, eles vão carregar os modulos correspondentes, e esses modulos vão carregar os componentes correspondentes
// então, quando a gente acessa o caminho 'home', ele vai carregar o modulo HomePageModule, que vai carregar o componente HomePage, e assim por diante
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
