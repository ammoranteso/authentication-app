import { TestBed } from '@angular/core/testing';
import { AuthFacade } from './auth.facade';

describe('AuthFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthFacade = TestBed.inject(AuthFacade);
    expect(service).toBeTruthy();
  });
});
