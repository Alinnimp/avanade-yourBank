import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente'
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  fotoCaminho: string = 'assets/img/yourbank.png'
  cliente = new Cliente;
  
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getCliente(11111111111) //aqui estou passando um cpf de cliente
    .then(dados => {
      this.cliente = dados;
    })
    .catch(erro => {
      console.log(erro)
    })
  }
}
