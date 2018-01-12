import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartnmentComponent } from './departnment.component';

describe('DepartnmentComponent', () => {
  let component: DepartnmentComponent;
  let fixture: ComponentFixture<DepartnmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartnmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartnmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
