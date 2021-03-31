import { TestBed } from '@angular/core/testing';

import { GihubAPIService } from './gihub-api.service';

describe('GihubAPIService', () => {
  let service: GihubAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GihubAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
