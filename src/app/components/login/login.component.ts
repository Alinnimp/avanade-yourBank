import { Component, OnInit } from '@angular/core';
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

  imgBackgrond: string = 'assets/img/background-login.png';
  fotoCaminho: string = 'assets/img/yourbank.png';
  constructor() { }

  ngOnInit() {
    const options = {
      stringsElement: '#typed-strings',
      strings: ['Peça a portabilidade e venha ser yourBank hoje mesmo', 'Inovavor digital e seguro'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
      }
      // let typed = new Typed(".typing-element", options);

    // var Greeter = typed (function(greeting /*:String*/) {
    //   this.greeting = greeting;
    // });
    
  }  
}
