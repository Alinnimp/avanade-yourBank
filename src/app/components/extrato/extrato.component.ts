import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente'
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  transferencias = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    let cpf = sessionStorage.getItem('cpf')
    let cpfSessionStorage = parseInt(cpf)
    this.clienteService.getCliente(cpfSessionStorage) //aqui estou passando um cpf de cliente
    .then(dados => {
      for(let i = 0; i < dados.transferencia.length; i++){
        this.transferencias.push(dados.transferencia[i]);
      }
    })
    .catch(erro => {
      console.log(erro)
    })
  }
}
