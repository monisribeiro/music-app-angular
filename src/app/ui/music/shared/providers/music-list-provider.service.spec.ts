import { TestBed, inject } from '@angular/core/testing';

import { MusicListProviderService } from './music-list-provider.service';

describe('MusicListProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicListProviderService]
    });
  });

  it('should be created', inject([MusicListProviderService], (service: MusicListProviderService) => {
    expect(service).toBeTruthy();
  }));
});
