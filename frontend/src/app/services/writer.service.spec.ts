import { TestBed, inject } from '@angular/core/testing';

import { WriterService } from './writer.service';

describe('WriterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WriterService]
    });
  });

  it('should be created', inject([WriterService], (service: WriterService) => {
    expect(service).toBeTruthy();
  }));
});
