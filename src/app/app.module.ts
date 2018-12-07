import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CurrencyMaskModule } from "ng2-currency-mask";
import {NgxMaskModule} from 'ngx-mask'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { ExibirSaldoComponent } from './components/exibir-saldo/exibir-saldo.component';
import { TransferenciaPageComponent } from './components/transferencia-page/transferencia-page.component';
import { HomeTransferenciaComponent } from './components/home-transferencia/home-transferencia.component';
import { TransferenciaFormComponent } from './components/transferencia-form/transferencia-form.component';
import { TransferenciaConfirmComponent } from './components/transferencia-confirm/transferencia-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomePageComponent,
    SaldoComponent,
    ExtratoComponent,
    ExibirSaldoComponent,
    TransferenciaPageComponent,
    HomeTransferenciaComponent,
    TransferenciaFormComponent,
    TransferenciaConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot ([
      {path: 'homePage',  component: HomePageComponent },
      {path: 'transferencia',  component: TransferenciaPageComponent },
      {path: 'confirmar-transferencia',  component: TransferenciaConfirmComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
