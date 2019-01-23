import { TestBed, inject } from '@angular/core/testing';

import { SidebartoggleService } from './sidebartoggle.service';

describe('SidebartoggleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebartoggleService]
    });
  });

  it('should be created', inject([SidebartoggleService], (service: SidebartoggleService) => {
    expect(service).toBeTruthy();
  }));
});
