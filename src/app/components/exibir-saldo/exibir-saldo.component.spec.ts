import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirSaldoComponent } from './exibir-saldo.component';

describe('ExibirSaldoComponent', () => {
  let component: ExibirSaldoComponent;
  let fixture: ComponentFixture<ExibirSaldoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirSaldoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
