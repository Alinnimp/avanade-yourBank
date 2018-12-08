import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia-form',
  templateUrl: './transferencia-form.component.html',
  styleUrls: ['./transferencia-form.component.css']
})
export class TransferenciaFormComponent implements OnInit {
  formularioTransferencia: boolean = true
  confirmarTransferencia: boolean = false
  resultTransferencia: boolean = false
  cliente = new Cliente;
  dataTransferencia;
  valor;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }


  onSubmit(formT: NgForm) {
    this.formularioTransferencia = !this.formularioTransferencia
    this.confirmarTransferencia = !this.confirmarTransferencia
    this.valor = formT.value.valorInput;
    if (formT.valid) {
      this.clienteService.getTransf(formT.value.agencia, formT.value.conta)
        .then(dados => {
          this.cliente = dados;
          this.dataTransferencia = new Date();
        })
        .catch(erro => {
          console.log(erro)
        })
    }

  }

  onConfirmar() {
    this.confirmarTransferencia = !this.confirmarTransferencia
    this.resultTransferencia = !this.resultTransferencia
    this.cliente.saldo = this.cliente.saldo + this.valor;
    this.cliente.transferencia.push({
      agencia: this.cliente.agencia,
      conta: this.cliente.conta,
      valor: this.valor,
      data: this.dataTransferencia,
      tipo: true
    });

    this.clienteService.postTransf(this.cliente)
      .then(resposta => {
        console.log("Transferencia efetuada com sucesso")
      })
      .catch(erro => {
        console.log(erro)
      })

  }

  onVoltar() {
    this.formularioTransferencia = !this.formularioTransferencia
    this.confirmarTransferencia = !this.confirmarTransferencia
  }

}
