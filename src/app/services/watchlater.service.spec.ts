import { TestBed } from '@angular/core/testing';

import { WatchlaterService } from './watchlater.service';

describe('WatchlaterService', () => {
  let service: WatchlaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchlaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
