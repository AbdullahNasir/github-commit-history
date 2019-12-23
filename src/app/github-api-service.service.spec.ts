import { TestBed, inject } from '@angular/core/testing';

import { GithubApiServiceService } from './github-api-service.service';

describe('GithubApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubApiServiceService]
    });
  });

  it('should be created', inject([GithubApiServiceService], (service: GithubApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
