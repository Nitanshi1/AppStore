import { TestBed } from '@angular/core/testing';

import { HomedetailsService } from './homedetails.service';

describe('HomedetailsService', () => {
  let service: HomedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
