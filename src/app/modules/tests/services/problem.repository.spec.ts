import { TestBed } from '@angular/core/testing';

import { ProblemRepository } from './problem.repository';

describe('Problem.RepositoryService', () => {
  let service: ProblemRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
