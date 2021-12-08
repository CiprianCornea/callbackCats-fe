import { TestBed } from '@angular/core/testing';

import { UserToUserRequestDtoAdapter } from './user-to-user-request.dto.adapter';

describe('UserToUserRequest.Dto.AdapterService', () => {
  let service: UserToUserRequestDtoAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserToUserRequestDtoAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
