import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';


// import { Typed } from 'typed.js';
// import * as Typed  from 'typed.js';
// declare let Typed: any;
// import './src/app/components/login/login.component.ts/typed.js' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  dados: any = {
    cpf: '',
    password: ''

  }

  imgBackgrond: string = 'assets/img/background-login.png';
  fotoCaminho: string = 'assets/img/yourbank.png';

  constructor(
    private formBuilder: FormBuilder,
    // private clienteService: ClienteService,
    private toastrService: ToastrService,
    private router: Router,
    private authGuardService: AuthGuardService
   ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      cpf: [null, Validators.compose([
        Validators.maxLength(11),
        Validators.required
      ]) ],
      password: [null, Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(6),
        Validators.required
      ])]
    });
    
  }  
  onSubmit() {
    console.log(this.formulario)
    //verificar se o  esta valido
    if(this.formulario.valid){ //atribuindo os dados
      this.dados.cpf = this.formulario.value.cpf
      this.dados.password = this.formulario.value.password
      //chamando minha service e chamando o metodo login passando os dados
      // this.clienteService.login(this.dados)
        .then(res => {
          console.log(res) //imprimindo resultado no console

          //colocando meu token de retorno da api localStorage
          // localStorage.setItem('token', JSON.stringfy(res))
          
          this.authGuardService.login();
          //chamando meu toastr pra mostrar uma mensagem
          // this.toastrService.sucess('Login feito com sucesso!')
         
          //jogando o user pra pagia de homePage
          this.router.navigate(['/homePage'])
        })
        .catch(err => {
          //mostro que algo deu errado para o usuario
          this.toastrService.error('Dados inválidos')
        })
    } else {

    }
    
  }
  onAcesso() {
    this.router.navigate(['/homePage'])
  }
}
