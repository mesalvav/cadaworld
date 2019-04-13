import { TestBed } from '@angular/core/testing';

import { AirlineapiService } from './airlineapi.service';

describe('AirlineapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirlineapiService = TestBed.get(AirlineapiService);
    expect(service).toBeTruthy();
  });
});
