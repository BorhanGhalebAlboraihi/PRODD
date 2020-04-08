import { TestBed } from '@angular/core/testing';

import { AccServiceProxyService } from './acc-service-proxy.service';

describe('AccServiceProxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccServiceProxyService = TestBed.get(AccServiceProxyService);
    expect(service).toBeTruthy();
  });
});
