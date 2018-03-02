import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupFormComponent } from './singup-form.component';

describe('SingupFormComponent', () => {
  let component: SingupFormComponent;
  let fixture: ComponentFixture<SingupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
