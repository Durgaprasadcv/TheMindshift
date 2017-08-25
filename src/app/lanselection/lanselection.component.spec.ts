import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanselectionComponent } from './lanselection.component';

describe('LanselectionComponent', () => {
  let component: LanselectionComponent;
  let fixture: ComponentFixture<LanselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
