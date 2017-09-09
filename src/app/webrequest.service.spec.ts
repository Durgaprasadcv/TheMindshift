import { TestBed, inject } from '@angular/core/testing';

import { WebrequestService } from './webrequest.service';

describe('WebrequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebrequestService]
    });
  });

  it('should be created', inject([WebrequestService], (service: WebrequestService) => {
    expect(service).toBeTruthy();
  }));
});
