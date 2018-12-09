import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente'
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-exibir-saldo',
  templateUrl: './exibir-saldo.component.html',
  styleUrls: ['./exibir-saldo.component.css']
})
export class ExibirSaldoComponent implements OnInit {

cliente = new Cliente;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    let cpf = sessionStorage.getItem('cpf')
    let cpfSessionStorage = parseInt(cpf)
    this.clienteService.getCliente(cpfSessionStorage) //aqui estou passando um cpf de cliente
    .then(dados => {
      this.cliente = dados;
    })
    .catch(erro => {
      console.log(erro)
    })
  }
}