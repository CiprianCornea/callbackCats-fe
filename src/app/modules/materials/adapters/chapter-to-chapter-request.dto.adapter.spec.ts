import { TestBed } from '@angular/core/testing';

import { ChapterToChapterRequestDtoAdapter } from './chapter-to-chapter-request.dto.adapter';

describe('ChapterToChapterRequest.Dto.Adapter.TsService', () => {
  let service: ChapterToChapterRequestDtoAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChapterToChapterRequestDtoAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
