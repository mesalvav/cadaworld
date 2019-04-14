import { TestBed } from '@angular/core/testing';

import { MessagingrutaService } from './messagingruta.service';

describe('MessagingrutaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagingrutaService = TestBed.get(MessagingrutaService);
    expect(service).toBeTruthy();
  });
});
