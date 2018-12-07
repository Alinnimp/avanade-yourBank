import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { CurrencyMaskModule } from "ng2-currency-mask";
import {NgxMaskModule} from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr' ;

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
import { AuthGuardService } from './guards/auth-guard.service';


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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    BrowserAnimationsModule, //  módulo de animações necessárias 
    CommonModule, 
    ToastrModule.forRoot (), //  ToastrModule adicionado 
    NgxMaskModule.forRoot(),
    RouterModule.forRoot ([
      {path: 'login',  component: LoginComponent },
      {path: 'homePage', canActivate: [AuthGuardService], component: HomePageComponent },
      {path: 'transferencia', canActivate: [AuthGuardService],  component: TransferenciaPageComponent },
      {path: '', redirectTo: 'login', pathMatch: 'full' }
    ])
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
