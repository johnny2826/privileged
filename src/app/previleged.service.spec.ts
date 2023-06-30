import { TestBed } from '@angular/core/testing';

import { PrevilegedService } from './previleged.service';

describe('PrevilegedService', () => {
  let service: PrevilegedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrevilegedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
