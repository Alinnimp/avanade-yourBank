import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaPageComponent } from './transferencia-page.component';

describe('TransferenciaPageComponent', () => {
  let component: TransferenciaPageComponent;
  let fixture: ComponentFixture<TransferenciaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenciaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
