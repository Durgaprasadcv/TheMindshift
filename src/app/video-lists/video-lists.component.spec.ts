import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListsComponent } from './video-lists.component';

describe('VideoListsComponent', () => {
  let component: VideoListsComponent;
  let fixture: ComponentFixture<VideoListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
