import { Injectable } from '@angular/core';
import {ProblemResponseDto} from "../models/dto/problem-response.dto";
import {Problem} from "../models/problem";

@Injectable({
  providedIn: 'root'
})
export class ProblemResponseDtoToProblemAdapter {

  constructor() { }

  adapt(item: ProblemResponseDto): Problem {
    let problem = new Problem();

    problem.problemId = item.externalId;
    problem.chapterExternalId = item.chapterExternalId;
    problem.correctAnswer = item.correctAnswer;
    problem.imageHref = item.imageHref;
    problem.explanationHref = item.explanationHref;

    return problem;
  }

}
