import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  private isAuthenticated: boolean = false;

  constructor() { }

  canActivate() {
    return this.isAuthenticated;
  }
  login(){
    return this.isAuthenticated = !this.isAuthenticated;
  }
}
