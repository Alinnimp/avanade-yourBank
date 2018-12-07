import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url: String = 'http://localhost:3000/clientes/';
  constructor(private http: HttpClient) {}

    getCliente(cpf: Number) {
      return this.http.get<Cliente>(this.url + `cliente/${cpf}`).toPromise();
    }
    getExtrato(cpf: Number) {
      return this.http.get<Cliente>(this.url + `extrato/${cpf}`).toPromise();
    }
}
