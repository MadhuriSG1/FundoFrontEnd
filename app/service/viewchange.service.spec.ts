import { TestBed, inject } from '@angular/core/testing';

import { ViewchangeService } from './viewchange.service';

describe('ViewchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewchangeService]
    });
  });

  it('should be created', inject([ViewchangeService], (service: ViewchangeService) => {
    expect(service).toBeTruthy();
  }));
});
