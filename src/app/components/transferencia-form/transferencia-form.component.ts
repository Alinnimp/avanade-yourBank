import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transferencia-form',
  templateUrl: './transferencia-form.component.html',
  styleUrls: ['./transferencia-form.component.css']
})
export class TransferenciaFormComponent implements OnInit {
  formularioTransferencia: boolean = true
  confirmarTransferencia: boolean = false
  resultTransferencia: boolean = false

  clienteLogadoCpf = parseInt(sessionStorage.getItem('cpf'));
  cliente = new Cliente;
  dataTransferencia;
  valor;

  constructor(private clienteService: ClienteService,
    private toastrService: ToastrService) { }

  ngOnInit() {
  }


  onSubmit(formT: NgForm) {
    this.formularioTransferencia = !this.formularioTransferencia
    this.confirmarTransferencia = !this.confirmarTransferencia
    this.valor = formT.value.valorInput;
    if (formT.valid) {
      this.clienteService.getTransf(formT.value.agencia, formT.value.conta)
        .then(dados => {
          if (dados.cpf != this.clienteLogadoCpf) {
            this.cliente = dados;
            this.dataTransferencia = new Date();
          } else {
            this.confirmarTransferencia = !this.confirmarTransferencia
            this.formularioTransferencia = !this.formularioTransferencia
            this.toastrService.error('Não é possível fazer uma transferência para si mesmo!')
          }
        })
        .catch(erro => {
          this.confirmarTransferencia = !this.confirmarTransferencia
          this.formularioTransferencia = !this.formularioTransferencia
          this.toastrService.error('Confirme os dados e tente novamente')
        })
    }

  }

  onConfirmar() {
    this.confirmarTransferencia = !this.confirmarTransferencia
    this.cliente.saldo = this.cliente.saldo + this.valor;
    this.cliente.transferencia.push({
      agencia: this.cliente.agencia,
      conta: this.cliente.conta,
      valor: this.valor,
      data: this.dataTransferencia,
      tipo: true
    });

    this.clienteService.criaTransf(this.cliente, this.clienteLogadoCpf)
      .then(resposta => {
        this.clienteService.postTransf(this.clienteLogadoCpf, this.valor)
          .then(resposta => {
            this.resultTransferencia = !this.resultTransferencia
            console.log("Transferencia efetuada com sucesso")
          })
          .catch(erro => {

          })
      })
      .catch(erro => {
        this.toastrService.error('Estamos com problemas, tente realizar a transferência mais tarde.')
      })

  }

  onVoltar() {
    this.formularioTransferencia = !this.formularioTransferencia
    this.confirmarTransferencia = !this.confirmarTransferencia
  }

}
