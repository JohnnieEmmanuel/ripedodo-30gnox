import { TestBed } from '@angular/core/testing';

import { MoviesearchService } from './moviesearch.service';

describe('MoviesearchService', () => {
  let service: MoviesearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
