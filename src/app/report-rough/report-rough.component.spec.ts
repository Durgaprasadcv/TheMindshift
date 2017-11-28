import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportRoughComponent } from './report-rough.component';

describe('ReportRoughComponent', () => {
  let component: ReportRoughComponent;
  let fixture: ComponentFixture<ReportRoughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportRoughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportRoughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
