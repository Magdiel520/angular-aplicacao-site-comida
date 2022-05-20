import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { ModalExclusaoComponent } from './shared/modal-exclusao/modal-exclusao.component';
import { ModalConfirmarPedidoComponent } from './shared/modal-confirmar-pedido/modal-confirmar-pedido.component';
import { ModalPagamentoConfirmadoComponent } from './shared/modal-pagamento-confirmado/modal-pagamento-confirmado.component';
import { ModalItemIncluidoComponent } from './shared/modal-item-incluido/modal-item-incluido.component';
import { LoadingCircleComponent } from './shared/loading-circle/loading-circle.component';
import { MenupagesComponent } from './pages/menupages/menupages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CarrinhoComponent,
    LoginComponent,
    PagamentoComponent,
    ModalExclusaoComponent,
    ModalConfirmarPedidoComponent,
    ModalPagamentoConfirmadoComponent,
    ModalItemIncluidoComponent,
    LoadingCircleComponent,
    MenupagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
