import { TestBed, inject } from '@angular/core/testing';

import { NotecrudService } from './notecrud.service';

describe('NotecrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotecrudService]
    });
  });

  it('should be created', inject([NotecrudService], (service: NotecrudService) => {
    expect(service).toBeTruthy();
  }));
});
