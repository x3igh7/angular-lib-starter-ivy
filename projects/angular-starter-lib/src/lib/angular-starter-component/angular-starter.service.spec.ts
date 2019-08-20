import { TestBed } from '@angular/core/testing';

import { AngularStarterService } from './angular-starter.service';

describe('AngularStarterWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularStarterService = TestBed.get(AngularStarterService);
    expect(service).toBeTruthy();
  });
});
