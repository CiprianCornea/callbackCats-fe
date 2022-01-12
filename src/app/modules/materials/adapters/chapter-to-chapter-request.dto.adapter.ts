import {Injectable} from '@angular/core';
import {Chapter} from "../models/chapter";
import {ChapterRequestDto} from "../models/dto/chapter-request.dto";

@Injectable({
  providedIn: 'root'
})
export class ChapterToChapterRequestDtoAdapter {

  constructor() {
  }

  adapt(item: Chapter): ChapterRequestDto {
    let chapterRequest: ChapterRequestDto = new ChapterRequestDto();

    chapterRequest.chapterName = item.chapterName;
    chapterRequest.pdfHref = item.pdfHref;
    chapterRequest.chapterCode = item.chapterCode;

    return chapterRequest;
  }

}
