import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebresponseComponent } from './webresponse.component';

describe('WebresponseComponent', () => {
  let component: WebresponseComponent;
  let fixture: ComponentFixture<WebresponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebresponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
