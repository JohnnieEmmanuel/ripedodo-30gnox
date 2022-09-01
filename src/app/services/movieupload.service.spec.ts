import { TestBed } from '@angular/core/testing';

import { MovieuploadService } from './movieupload.service';

describe('MovieuploadService', () => {
  let service: MovieuploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieuploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
