import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url: String = 'http://localhost:3000/clientes/';
  private _loginUrl = 'http://localhost:3000/api/auth/login';
  constructor(private http: HttpClient) {}

    getCliente(cpf: Number) {
      return this.http.get<Cliente>(this.url + `cliente/${cpf}`).toPromise();
    }
    getTransf(agencia: Number, conta: Number) {
      return this.http.get<Cliente>(this.url + `cliente/${agencia}/${conta}`).toPromise();
    }
    postTransf(cliente: Cliente){
      return this.http.put(this.url + `cliente/${cliente.cpf}`, cliente).toPromise();
    }
    loginUser(user) {
      return this.http.post<any>(this._loginUrl, user)
   }
}
