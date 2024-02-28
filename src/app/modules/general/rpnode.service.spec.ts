import { TestBed } from '@angular/core/testing';

import { RpnodeService } from './rpnode.service';

describe('RpnodeService', () => {
  let service: RpnodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RpnodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
