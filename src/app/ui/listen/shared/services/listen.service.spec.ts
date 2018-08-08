import { TestBed, inject } from '@angular/core/testing';

import { ListenService } from './listen.service';

describe('ListenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListenService]
    });
  });

  it('should be created', inject([ListenService], (service: ListenService) => {
    expect(service).toBeTruthy();
  }));
});
