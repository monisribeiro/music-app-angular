import { TestBed, inject } from '@angular/core/testing';

import { ArtistsListProviderService } from './artists-list-provider.service';

describe('ArtistsListProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistsListProviderService]
    });
  });

  it('should be created', inject([ArtistsListProviderService], (service: ArtistsListProviderService) => {
    expect(service).toBeTruthy();
  }));
});
