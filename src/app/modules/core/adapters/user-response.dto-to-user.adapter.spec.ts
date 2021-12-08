import { TestBed } from '@angular/core/testing';

import { UserResponseDtoToUserAdapter } from './user-response.dto-to-user.adapter';

describe('UserResponeDtoToUser.AdapterService', () => {
  let service: UserResponseDtoToUserAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserResponseDtoToUserAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
