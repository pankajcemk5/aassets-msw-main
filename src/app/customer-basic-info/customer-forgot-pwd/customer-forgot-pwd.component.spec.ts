import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerForgotPWDComponent } from './customer-forgot-pwd.component';

describe('CustomerForgotPWDComponent', () => {
  let component: CustomerForgotPWDComponent;
  let fixture: ComponentFixture<CustomerForgotPWDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerForgotPWDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerForgotPWDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
