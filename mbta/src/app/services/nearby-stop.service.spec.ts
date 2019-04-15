import { TestBed } from '@angular/core/testing';

import { NearbyStopService } from './nearby-stop.service';

describe('NearbyStopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NearbyStopService = TestBed.get(NearbyStopService);
    expect(service).toBeTruthy();
  });
});
