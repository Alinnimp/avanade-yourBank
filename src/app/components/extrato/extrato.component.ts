import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  clienteLogadoCpf = parseInt(sessionStorage.getItem('cpf'));
  transferencias = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getCliente(this.clienteLogadoCpf)
    .then(dados => {
      for(let i = 0; i < dados.transferencia.length; i++){
        this.transferencias.push(dados.transferencia[i]);
      }
      this.transferencias.reverse();
    })
    .catch(erro => {
      console.log(erro)
    })
  }
}
