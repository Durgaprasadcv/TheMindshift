import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrserviceComponent } from './prservice.component';

describe('PrserviceComponent', () => {
  let component: PrserviceComponent;
  let fixture: ComponentFixture<PrserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
