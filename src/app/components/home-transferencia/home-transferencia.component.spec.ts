import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTransferenciaComponent } from './home-transferencia.component';

describe('HomeTransferenciaComponent', () => {
  let component: HomeTransferenciaComponent;
  let fixture: ComponentFixture<HomeTransferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTransferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
