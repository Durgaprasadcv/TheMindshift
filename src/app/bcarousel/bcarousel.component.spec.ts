import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcarouselComponent } from './bcarousel.component';

describe('BcarouselComponent', () => {
  let component: BcarouselComponent;
  let fixture: ComponentFixture<BcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
