import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorWithdrawComponent } from './mentor-withdraw.component';

describe('MentorWithdrawComponent', () => {
  let component: MentorWithdrawComponent;
  let fixture: ComponentFixture<MentorWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
