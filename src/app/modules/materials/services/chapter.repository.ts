import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {ChapterToChapterRequestDtoAdapter} from "../adapters/chapter-to-chapter-request.dto.adapter";
import {ChapterResponseDtoToChapterAdapter} from "../adapters/chapter-response.dto-to-chapter.adapter";
import {ChapterResponseDto} from "../models/dto/chapter-response.dto";
import {ChapterRequestDto} from "../models/dto/chapter-request.dto";
import {ChapterForUpdateDto} from "../models/dto/chapter-for-update.dto";

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

  getAllChapterForClass9_mock(): Observable<ChapterResponseDto[]> {
    return of([
      {
        "externalId": "ac866eae-15a2-465e-b0a6-5c95dbf21e68",
        "chapterName": "9_MultimiSiLogicaMatematica",
        "pdfHref": "https://onedrive.live.com/embed?cid=EE3338ACBC4E8502&resid=EE3338ACBC4E8502%2135090&authkey=ABAoW_UmMWkN078&em=2",
        "chapterCode": "A"
      },
      {
        "externalId": "28ec12db-07a8-4a15-b0d7-690516340e58",
        "chapterName": "9_FunctiaDeGradulI",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135087&parId=EE3338ACBC4E8502%2135083&o=OneUp",
        "chapterCode": "B"
      },
      {
        "externalId": "33cc32c6-f71f-4d88-b27d-6d2b0f56641f",
        "chapterName": "9_FunctiaDeGradulII",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135094&parId=EE3338ACBC4E8502%2135083&o=OneUp",
        "chapterCode": "C"
      },
      {
        "externalId": "38457419-1572-4f0f-b9f6-f0a4987a32c3",
        "chapterName": "9_VectoriInPlan",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135096&parId=EE3338ACBC4E8502%2135083&o=OneUp",
        "chapterCode": "D"
      },
      {
        "externalId": "396bba7f-7f6a-4bbf-ba62-3ef6ac489727",
        "chapterName": "9_Trigonometrie",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135093&parId=EE3338ACBC4E8502%2135083&o=OneUp",
        "chapterCode": "E"
      }
    ]);
  }

  getAllChapterForClass10_mock(): Observable<ChapterResponseDto[]> {
    return of([
      {
        "externalId": "5ece662e-a937-479c-9eda-2d97764a7a27",
        "chapterName": "10_PuteriRadicaliSiLogaritmi",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135115&parId=EE3338ACBC4E8502%2135101&o=OneUp",
        "chapterCode": "A"
      },
      {
        "externalId": "c153333d-2aa2-48f8-b148-0d6c0b3c6071",
        "chapterName": "10_NumereComplexe",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135114&parId=EE3338ACBC4E8502%2135101&o=OneUp",
        "chapterCode": "B"
      },
      {
        "externalId": "75d27e69-0ced-4431-b5d9-66b865704ecf",
        "chapterName": "10_FunctiiInjectiveSurjectiveBijective",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135108&parId=EE3338ACBC4E8502%2135101&o=OneUp",
        "chapterCode": "C"
      },
      {
        "externalId": "f95e5ab5-a806-4630-a9ba-938452c4417b",
        "chapterName": "10_FunctiiElementare",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135109&parId=EE3338ACBC4E8502%2135101&o=OneUp",
        "chapterCode": "D"
      },
      {
        "externalId": "08403992-98f1-49fa-acf2-527d818e6e05",
        "chapterName": "10_EcuatiiSiInecuatii",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135555&parId=EE3338ACBC4E8502%2135101&o=OneUp",
        "chapterCode": "E"
      },
      {
        "externalId": "c0e63bcc-5bcb-419b-838d-0bd544742053",
        "chapterName": "10_Combinatorica",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135104&parId=EE3338ACBC4E8502%2135101&o=OneUp",
        "chapterCode": "F"
      },
      {
        "externalId": "d4ce0a4c-ba15-4ea0-bf1c-acc7811e629a",
        "chapterName": "10_GeometrieAnalitica",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135113&parId=EE3338ACBC4E8502%2135101&o=OneUp",
        "chapterCode": "G"
      }
    ]);
  }

  getAllChapterForClass11_mock(): Observable<ChapterResponseDto[]> {
    return of([
      {
        "externalId": "1959307c-3c94-405d-ac49-5b9c67e6d7e0",
        "chapterName": "11_Permutari",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135139&parId=EE3338ACBC4E8502%2135123&o=OneUp",
        "chapterCode": "A"
      },
      {
        "externalId": "9f04124c-11e2-4374-8dd6-9ca034b4cfac",
        "chapterName": "11_Matrice",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135136&parId=EE3338ACBC4E8502%2135123&o=OneUp",
        "chapterCode": "B"
      },
      {
        "externalId": "61a2eba3-1bf4-496b-8aa7-8943530b0335",
        "chapterName": "11_Determinanti",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135136&parId=EE3338ACBC4E8502%2135123&o=OneUp",
        "chapterCode": "C"
      },
      {
        "externalId": "6460eb88-9ff8-4a0c-89da-706fcc8b4c4d",
        "chapterName": "11_Sisteme",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135136&parId=EE3338ACBC4E8502%2135123&o=OneUp",
        "chapterCode": "D"
      },
      {
        "externalId": "1807946a-39d4-4588-aeec-40ed91a725ba",
        "chapterName": "11_Siruri",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135142&parId=EE3338ACBC4E8502%2135123&o=OneUp",
        "chapterCode": "E"
      },
      {
        "externalId": "08f968bc-9880-4fd1-8377-b31db66874f0",
        "chapterName": "11_LimiteDeFunctii",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135133&parId=EE3338ACBC4E8502%2135123&o=OneUp",
        "chapterCode": "F"
      },
      {
        "externalId": "5f825833-8484-4d7c-b5b3-845e5b85ccd1",
        "chapterName": "11_Asimptote",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135126&parId=EE3338ACBC4E8502%2135123&o=OneUp",
        "chapterCode": "G"
      },
      {
        "externalId": "72d2b477-3b68-42b6-95bd-facb1aaaf79c",
        "chapterName": "11_RepGrafica",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135554&parId=EE3338ACBC4E8502%2135123&o=OneUp",
        "chapterCode": "H"
      },
      {
        "externalId": "486e3480-fa7c-4231-bdac-874ebdd7b1da",
        "chapterName": "11_FunctiiDerivabile",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135549&parId=EE3338ACBC4E8502%2135123&o=OneUp",
        "chapterCode": "I"
      },
      {
        "externalId": "3b0454da-bd8e-401f-b101-d1028db002cb",
        "chapterName": "11_FunctiiContinue",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135546&parId=EE3338ACBC4E8502%2135123&o=OneUp",
        "chapterCode": "J"
      }
    ]);
  }

  getAllChapterForClass12_mock(): Observable<ChapterResponseDto[]> {
    return of([
      {
        "externalId": "7f3328be-ad94-473e-a55b-c847f54c2625",
        "chapterName": "12_PrimitivaUneiFunctii",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135626&parId=EE3338ACBC4E8502%2135613&o=OneUp",
        "chapterCode": "A"
      },
      {
        "externalId": "7b4bcaac-10e1-457c-ae31-1252ab6f1472",
        "chapterName": "12_ElementeDeAlgebra",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135618&parId=EE3338ACBC4E8502%2135613&o=OneUp",
        "chapterCode": "B"
      },
      {
        "externalId": "f39b1c01-a996-43da-a8f4-9556322303b3",
        "chapterName": "12_IntegralaDefinita",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135621&parId=EE3338ACBC4E8502%2135613&o=OneUp",
        "chapterCode": "C"
      },
      {
        "externalId": "0aaa6967-1783-41f2-936f-9a4105dcd783",
        "chapterName": "12_StructuriAlgebrice",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135627&parId=EE3338ACBC4E8502%2135613&o=OneUp",
        "chapterCode": "D"
      },
      {
        "externalId": "88193878-c2ea-495a-b812-a381f53c955e",
        "chapterName": "12_AplicatiiAleIntegraleiDefinite",
        "pdfHref": "https://onedrive.live.com/?authkey=%21ANDaOX4VmWk7xNM&cid=EE3338ACBC4E8502&id=EE3338ACBC4E8502%2135616&parId=EE3338ACBC4E8502%2135613&o=OneUp",
        "chapterCode": "E"
      }
    ]);
  }

  addChapter(chapter: ChapterRequestDto) {
    return this.http.post<ChapterResponseDto>(`${this.apiServerUrl}/chapter/create`, chapter);
  }

  findChapterByExternalId(chapterId: string): Observable<ChapterResponseDto> {
    return this.http.get<ChapterResponseDto>(`${this.apiServerUrl}/chapter/find/?chapterId=${chapterId}`);
  }

  updateChapter(externalId: string, chapterForUpdateDto: ChapterForUpdateDto): Observable<ChapterResponseDto> {
    return this.http.put<ChapterResponseDto>(`${environment.apiUrl}/update/?externalId=${externalId}`, chapterForUpdateDto);
  }

  deleteChapter(externalId: string): Observable<void> {
    return this.http.delete<void>(`${environment}/chapter/delete/?externalId=${externalId}`);
  }

  getAllChapterForClass(className: string): Observable<ChapterResponseDto[]> {
    return this.http.post<ChapterResponseDto[]>(`${environment.apiUrl}/chapter/find-chapters-by-class?className=${className}`, {});
  }

  isChapterDone(chapterExternalId: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiServerUrl}/chapter/is_chapter_done/${chapterExternalId}`);
  }

  getProgressForClass(className: number): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/chapter/find-progress?className=${className}`);
  }

  changeChapterStatus(chapterCode: string): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/chapter/change-status?chapterCode=${chapterCode}`, {});
  }
}
