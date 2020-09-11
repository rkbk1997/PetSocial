import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLeftComponent } from './login-left.component';

describe('LoginLeftComponent', () => {
  let component: LoginLeftComponent;
  let fixture: ComponentFixture<LoginLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
