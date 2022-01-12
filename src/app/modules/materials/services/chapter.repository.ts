import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Chapter} from "../models/chapter";
import {Observable} from "rxjs";
import {ChapterToChapterRequestDtoAdapter} from "../adapters/chapter-to-chapter-request.dto.adapter";
import {ChapterResponseDtoToChapterAdapter} from "../adapters/chapter-response.dto-to-chapter.adapter";
import {ChapterResponseDto} from "../models/dto/chapter-response.dto";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ChapterRepository {
  private apiServerUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private chapterToChapterRequestDtoAdapter: ChapterToChapterRequestDtoAdapter,
    private chapterResponseDtoToChapterAdapter: ChapterResponseDtoToChapterAdapter
  ) {
  }

  addChapter(chapter: Chapter) {
    const headers = new HttpHeaders({
      'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1eCIsInJvbGUiOlsiUk9MRV9BRE1JTiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvbG9naW4iLCJleHAiOjE2Mzk3NTg4MjZ9"
    })
    let chapterRequest = this.chapterToChapterRequestDtoAdapter.adapt(chapter);
    return this.http.post<ChapterResponseDto>(`${this.apiServerUrl}/chapter/create`, chapterRequest , {headers: headers});
  }

  getChapterByExternalId(chapterId: string): Observable<Chapter> {
    return this.http.get<ChapterResponseDto>(`${this.apiServerUrl}/find/${chapterId}`).pipe(
      map(result => this.chapterResponseDtoToChapterAdapter.adapt(result))
    );
  }

  updateChapter(chapterId: string, chapter: Chapter): Observable<Chapter> {
    let chapterRequestDto = this.chapterToChapterRequestDtoAdapter.adapt(chapter);
    return this.http.put<ChapterResponseDto>(`${this.apiServerUrl}/update/${chapterId}`, chapterRequestDto).pipe(
      map(result => this.chapterResponseDtoToChapterAdapter.adapt(result))
    );
  }

  deleteChapter(chapterId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${chapterId}`)
  }
}
