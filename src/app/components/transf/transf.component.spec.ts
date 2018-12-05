import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfComponent } from './transf.component';

describe('TransfComponent', () => {
  let component: TransfComponent;
  let fixture: ComponentFixture<TransfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
