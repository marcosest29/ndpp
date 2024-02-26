import { TestBed } from '@angular/core/testing';

import { TpnodeService } from './tpnode.service';

describe('TpnodeService', () => {
  let service: TpnodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TpnodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
