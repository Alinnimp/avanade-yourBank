import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';
// import { FormGroup } from '@angular/forms';

// import { ToastrService } from 'ngx-toastr';
// import { AuthGuardService } from 'src/app/guards/auth-guard.service';
// import { ClienteService } from '../../services/cliente.service';


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

  // imgBackgrond: string = 'assets/img/background-login.png';
  // fotoCaminho: string = 'assets/img/yourbank.png';

  constructor(private _auth: ClienteService,
    private _router: Router){ }

  ngOnInit() {  
  }  

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res =>{
        console.log('res' , res.cpf)
        
        sessionStorage.setItem('cpf', res.cpf)
        this._router.navigate(['/homePage'])
      },
       err => console.log(err)
     
    ) 
    console.log('user1', this.loginUserData)
  }

}