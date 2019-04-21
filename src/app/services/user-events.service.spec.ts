import { TestBed } from '@angular/core/testing';

import { UserEventsService } from './user-events.service';

describe('UserEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserEventsService = TestBed.get(UserEventsService);
    expect(service).toBeTruthy();
  });
});
