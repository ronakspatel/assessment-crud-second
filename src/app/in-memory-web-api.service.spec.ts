import { TestBed, inject } from '@angular/core/testing';

import { InMemoryWebApiService } from './in-memory-web-api.service';

describe('InMemoryWebApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryWebApiService]
    });
  });

  it('should be created', inject([InMemoryWebApiService], (service: InMemoryWebApiService) => {
    expect(service).toBeTruthy();
  }));
});
