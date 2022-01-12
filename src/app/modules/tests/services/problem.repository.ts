import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ProblemToProblemRequestDtoAdapter} from "../adapters/problem-to-problem-request.dto.adapter";
import {ProblemResponseDtoToProblemAdapter} from "../adapters/problem-response.dto-to-problem.adapter";
import {Problem} from "../models/problem";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProblemRepository {
  private apiServerUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private problemToProblemRequestDtoAdapter: ProblemToProblemRequestDtoAdapter,
    private problemResponseDtoToProblemAdapter: ProblemResponseDtoToProblemAdapter
  ) { }

  addProblem(problem: Problem): Observable<Problem> {
    let problemRequest = this.problemToProblemRequestDtoAdapter.adapter(problem);

  }
}
