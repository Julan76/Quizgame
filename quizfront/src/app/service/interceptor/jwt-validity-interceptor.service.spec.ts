import { TestBed } from '@angular/core/testing';

import { JwtValidityInterceptorService } from './jwt-validity-interceptor.service';

describe('JwtValidityInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtValidityInterceptorService = TestBed.get(JwtValidityInterceptorService);
    expect(service).toBeTruthy();
  });
});
