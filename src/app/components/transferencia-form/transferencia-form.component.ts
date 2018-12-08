import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-transferencia-form',
  templateUrl: './transferencia-form.component.html',
  styleUrls: ['./transferencia-form.component.css']
})
export class TransferenciaFormComponent implements OnInit {

  formularioTransferencia: boolean = true
  confirmarTransferencia: boolean = false
  resultTransferencia: boolean = false

  tipo = null;
  tipos = [
    {name: 'DOC'},
    {name: 'TED'}
  ];

  constructor() { } 

  ngOnInit() {
  }

  onSubmit() {
    this.formularioTransferencia = !this.formularioTransferencia
    this.confirmarTransferencia = !this.confirmarTransferencia    
  }

  onConfirmar() {
    this.confirmarTransferencia = !this.confirmarTransferencia 
    this.resultTransferencia = !this.resultTransferencia
  }

  onVoltar() {
    this.formularioTransferencia = !this.formularioTransferencia
    this.confirmarTransferencia = !this.confirmarTransferencia 
  }

}
