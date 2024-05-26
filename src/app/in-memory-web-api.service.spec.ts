import { TestBed } from '@angular/core/testing';

import { InMemoryWebApiService } from './in-memory-web-api.service';

describe('InMemoryWebApiService', () => {
  let service: InMemoryWebApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryWebApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
