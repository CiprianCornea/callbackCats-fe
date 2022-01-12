import { TestBed } from '@angular/core/testing';

import { ProblemToProblemRequestDtoAdapter } from './problem-to-problem-request.dto.adapter';

describe('ProblemToProblemRequest.Dto.AdapterService', () => {
  let service: ProblemToProblemRequestDtoAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemToProblemRequestDtoAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
