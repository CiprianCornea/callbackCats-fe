import { TestBed } from '@angular/core/testing';

import { ProblemResponseDtoToProblemAdapter } from './problem-response.dto-to-problem.adapter';

describe('ProblemResponse.DtoToProblem.AdpaterService', () => {
  let service: ProblemResponseDtoToProblemAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemResponseDtoToProblemAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
