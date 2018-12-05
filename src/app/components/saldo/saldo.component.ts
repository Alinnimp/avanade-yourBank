import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  showExtrato: boolean = false

  constructor() { }

  ngOnInit() {
  }

  contentExtrato () {
    this.showExtrato = !this.showExtrato
  }

}
