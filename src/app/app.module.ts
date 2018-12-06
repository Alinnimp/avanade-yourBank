import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TransfComponent } from './components/transf/transf.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { ExibirSaldoComponent } from './components/exibir-saldo/exibir-saldo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomePageComponent,
    TransfComponent,
    SaldoComponent,
    ExtratoComponent,
    ExibirSaldoComponent
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
