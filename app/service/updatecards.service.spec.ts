import { TestBed, inject } from '@angular/core/testing';

import { UpdatecardsService } from './updatecards.service';

describe('UpdatecardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatecardsService]
    });
  });

  it('should be created', inject([UpdatecardsService], (service: UpdatecardsService) => {
    expect(service).toBeTruthy();
  }));
});
