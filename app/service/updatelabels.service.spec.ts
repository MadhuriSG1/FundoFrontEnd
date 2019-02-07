import { TestBed, inject } from '@angular/core/testing';

import { UpdatelabelsService } from './updatelabels.service';

describe('UpdatelabelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatelabelsService]
    });
  });

  it('should be created', inject([UpdatelabelsService], (service: UpdatelabelsService) => {
    expect(service).toBeTruthy();
  }));
});
