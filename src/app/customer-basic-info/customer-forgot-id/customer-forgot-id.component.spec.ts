import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerForgotIDComponent } from './customer-forgot-id.component';

describe('CustomerForgotIDComponent', () => {
  let component: CustomerForgotIDComponent;
  let fixture: ComponentFixture<CustomerForgotIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerForgotIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerForgotIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
