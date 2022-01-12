import {Injectable} from '@angular/core';
import {ChapterResponseDto} from "../models/dto/chapter-response.dto";
import {Chapter} from "../models/chapter";

@Injectable({
  providedIn: 'root'
})
export class ChapterResponseDtoToChapterAdapter {

  constructor() {
  }

  adapt(item: ChapterResponseDto): Chapter {
    let chapter: Chapter = new Chapter();

    chapter.chapterId = item.externalId;
    chapter.chapterName = item.chapterName;
    chapter.pdfHref = item.pdfHref;
    chapter.chapterCode = item.chapterCode;

    return chapter;
  }

}
