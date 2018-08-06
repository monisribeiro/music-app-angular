import { TestBed, inject } from '@angular/core/testing';

import { SearchMusicsProviderService } from './search-musics-provider.service';

describe('SearchMusicsProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchMusicsProviderService]
    });
  });

  it('should be created', inject([SearchMusicsProviderService], (service: SearchMusicsProviderService) => {
    expect(service).toBeTruthy();
  }));
});
