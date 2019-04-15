import { TestBed } from '@angular/core/testing';

import { MessagingResultsPostService } from './messaging-results-post.service';

describe('MessagingResultsPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagingResultsPostService = TestBed.get(MessagingResultsPostService);
    expect(service).toBeTruthy();
  });
});
