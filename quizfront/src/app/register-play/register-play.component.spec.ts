import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPlayComponent } from './register-play.component';

describe('RegisterPlayComponent', () => {
  let component: RegisterPlayComponent;
  let fixture: ComponentFixture<RegisterPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
