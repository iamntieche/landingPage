import { TestBed } from '@angular/core/testing';

import { IsRegistedGuard } from './is-registed.guard';

describe('IsRegistedGuard', () => {
  let guard: IsRegistedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsRegistedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
