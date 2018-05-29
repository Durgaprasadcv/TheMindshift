import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewVideoNewComponent } from './preview-video-new.component';

describe('PreviewVideoNewComponent', () => {
  let component: PreviewVideoNewComponent;
  let fixture: ComponentFixture<PreviewVideoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewVideoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewVideoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
