import { Injectable } from '@angular/core';
import {Problem} from "../models/problem";
import {ProblemRequestDto} from "../models/dto/problem-request.dto";
import {ProblemResponseDto} from "../models/dto/problem-response.dto";

@Injectable({
  providedIn: 'root'
})
export class ProblemToProblemRequestDtoAdapter {

  constructor() { }

  adapter(item: Problem): ProblemRequestDto {
    let problemRequestDto = new ProblemRequestDto();

    problemRequestDto.explanationHref = item.explanationHref;
    problemRequestDto.chapterExternalId = item.chapterExternalId;
    problemRequestDto.correctAnswer = item.correctAnswer;
    problemRequestDto.chapterExternalId = item.chapterExternalId;

    return problemRequestDto;
  }
}
