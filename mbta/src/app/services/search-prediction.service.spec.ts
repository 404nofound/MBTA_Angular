import { TestBed } from '@angular/core/testing';

import { SearchPredictionService } from './search-prediction.service';

describe('SearchPredictionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchPredictionService = TestBed.get(SearchPredictionService);
    expect(service).toBeTruthy();
  });
});
