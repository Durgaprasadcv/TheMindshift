import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOptionPreviewComponent } from './question-option-preview.component';

describe('QuestionOptionPreviewComponent', () => {
  let component: QuestionOptionPreviewComponent;
  let fixture: ComponentFixture<QuestionOptionPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionOptionPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionOptionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
