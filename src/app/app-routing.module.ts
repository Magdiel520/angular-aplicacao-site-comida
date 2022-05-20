import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupagesComponent } from './pages/menupages/menupages.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'menu',component:MenuComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'about',component:AboutComponent},
  {path: 'carrinho',component:CarrinhoComponent},
  {path: 'login',component:LoginComponent},
  {path: 'pagamento',component:PagamentoComponent},
  {path: 'menu/:id',component:MenupagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
