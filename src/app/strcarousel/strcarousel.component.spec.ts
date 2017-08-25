import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrcarouselComponent } from './strcarousel.component';

describe('StrcarouselComponent', () => {
  let component: StrcarouselComponent;
  let fixture: ComponentFixture<StrcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
