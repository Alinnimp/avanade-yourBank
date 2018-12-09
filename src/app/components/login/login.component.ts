import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
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
  loginUserData = {}

  imgBackgrond: string = 'assets/img/background-login.png';
  fotoCaminho: string = 'assets/img/yourbank.png';

  constructor(private auth: ClienteService,
    private router: Router,
    private  authGuardService : AuthGuardService,
    private toastrService: ToastrService){ }

  ngOnInit() {  
  }  

  loginUser () {
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res =>{
        console.log('res' , res.token)
        console.log('res' , res.cliente)
        console.log('res' , res.cliente.cpf)

        sessionStorage.setItem('cpf', res.cliente.cpf)
        this.toastrService.success('Login feito com sucesso!')
        this.authGuardService.login();
        this.router.navigate(['/homePage'])
      },
       err => {console.log(err)
       this.toastrService.error('Falha ao realizar login, tente novamente')
       }
     
    ) 
    console.log('requisicao voltou')
  }

}