import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTest1Component } from './create-test1.component';

describe('CreateTest1Component', () => {
  let component: CreateTest1Component;
  let fixture: ComponentFixture<CreateTest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
