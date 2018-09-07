import { TestBed, inject } from '@angular/core/testing';

import { NasdaqSearchService } from './nasdaq-search.service';

describe('NasdaqSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NasdaqSearchService]
    });
  });

  it('should be created', inject([NasdaqSearchService], (service: NasdaqSearchService) => {
    expect(service).toBeTruthy();
  }));
});
