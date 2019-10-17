import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTrainetComponent } from './signup-trainet.component';

describe('SignupTrainetComponent', () => {
  let component: SignupTrainetComponent;
  let fixture: ComponentFixture<SignupTrainetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupTrainetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupTrainetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
