import { TestBed } from '@angular/core/testing';

import { StopDataService } from './stop-data.service';

describe('StopDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StopDataService = TestBed.get(StopDataService);
    expect(service).toBeTruthy();
  });
});
