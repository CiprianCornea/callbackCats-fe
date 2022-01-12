import { TestBed } from '@angular/core/testing';

import { ChapterResponseDtoToChapterAdapter } from './chapter-response.dto-to-chapter.adapter';

describe('ChapterRespone.DtoToChapter.AdapterService', () => {
  let service: ChapterResponseDtoToChapterAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChapterResponseDtoToChapterAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
