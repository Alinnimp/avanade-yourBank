import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente'
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  fotoCaminho: string = 'assets/img/yourbank.png';
  clienteLogadoCpf = parseInt(sessionStorage.getItem('cpf'));
  cliente = new Cliente;
  
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {

    this.clienteService.getCliente(this.clienteLogadoCpf)
    .then(dados => {
      this.cliente = dados;
    })
    .catch(erro => {
      console.log(erro)
    })
  }
}
