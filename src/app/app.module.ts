import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'

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
    TransferenciaFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot ([
      {path: 'homePage',  component: HomePageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
