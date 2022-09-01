import { TestBed } from '@angular/core/testing';

import { MoviecrudService } from './moviecrud.service';

describe('MoviecrudService', () => {
  let service: MoviecrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviecrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
