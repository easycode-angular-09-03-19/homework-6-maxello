import { TestBed } from '@angular/core/testing';

import { MessageEventsService } from './message-events.service';

describe('MessageEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageEventsService = TestBed.get(MessageEventsService);
    expect(service).toBeTruthy();
  });
});
