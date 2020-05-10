import { TestBed } from '@angular/core/testing';

import { CustomtimeserviceService } from './customtimeservice.service';

describe('CustomtimeserviceService', () => {
  let service: CustomtimeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomtimeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
