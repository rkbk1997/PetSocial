import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalpostComponent } from './signalpost.component';

describe('SignalpostComponent', () => {
  let component: SignalpostComponent;
  let fixture: ComponentFixture<SignalpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
