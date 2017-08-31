import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmenuComponent } from './smenu.component';

describe('SmenuComponent', () => {
  let component: SmenuComponent;
  let fixture: ComponentFixture<SmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
