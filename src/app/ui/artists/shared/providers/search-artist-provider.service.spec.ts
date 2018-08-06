import { TestBed, inject } from '@angular/core/testing';

import { SearchArtistProviderService } from './search-artist-provider.service';

describe('SearchArtistProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchArtistProviderService]
    });
  });

  it('should be created', inject([SearchArtistProviderService], (service: SearchArtistProviderService) => {
    expect(service).toBeTruthy();
  }));
});
