import { TestBed, inject } from '@angular/core/testing';

import { PlayMusicProviderService } from './play-music-provider.service';

describe('PlayMusicProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayMusicProviderService]
    });
  });

  it('should be created', inject([PlayMusicProviderService], (service: PlayMusicProviderService) => {
    expect(service).toBeTruthy();
  }));
});
