import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-transferencia-form',
  templateUrl: './transferencia-form.component.html',
  styleUrls: ['./transferencia-form.component.css']
})
export class TransferenciaFormComponent implements OnInit {

  transferencia: any = {
    conta: null,
    agencia: null,
    valor: null,
}

tipo = null;
tipos = [
  {name: 'DOC'},
  {name: 'TED'}
];
  
  onSubmit(form) {
    console.log(form)
    //console.log(this.transferencia)
  }
  constructor() { }

  ngOnInit() {
  }

}
