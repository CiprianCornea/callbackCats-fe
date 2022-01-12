import { TestBed } from '@angular/core/testing';

import { ChapterRepository } from './chapter.repository';

describe('Chapter.RepositoryService', () => {
  let service: ChapterRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChapterRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
