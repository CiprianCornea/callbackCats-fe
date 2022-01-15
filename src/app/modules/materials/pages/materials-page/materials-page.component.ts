import {Component, OnInit} from '@angular/core';
import {ChapterRepository} from "../../services/chapter.repository";
import {DomSanitizer, SafeResourceUrl, SafeUrl} from "@angular/platform-browser";
import {ChapterResponseDto} from "../../models/dto/chapter-response.dto";

@Component({
  selector: 'app-materials-page',
  templateUrl: './materials-page.component.html',
  styleUrls: ['./materials-page.component.scss']
})
export class MaterialsPageComponent implements OnInit {
  public show_class9 = true;
  public show_class10 = false;
  public show_class11 = false;
  public show_class12 = false;

  public chapterForClass9: ChapterResponseDto[] = [];
  public chapterForClass10: ChapterResponseDto[] = [];
  public chapterForClass11: ChapterResponseDto[] = [];
  public chapterForClass12: ChapterResponseDto[] = [];

  public chapters9: SafeResourceUrl[] = [];
  public chapters10: SafeResourceUrl[] = [];
  public chapters11: SafeResourceUrl[] = [];
  public chapters12: SafeResourceUrl[] = [];


  constructor(
    private repo: ChapterRepository,
    private dom: DomSanitizer
  ) {
  }

  modifyC9() {
    this.show_class9 = !this.show_class9;
  }

  modifyC10() {
    this.show_class10 = !this.show_class10;
  }

  modifyC11() {
    this.show_class11 = !this.show_class11;
  }

  modifyC12() {
    this.show_class12 = !this.show_class12;
  }

  ngOnInit(): void {
    // get chapter by class mock
    // this.getAllChapter();

    // class 9
    // this.repo.getAllChapterForClass9_mock().subscribe(
    //   response => {
    //     this.chapterForClass9 = response
    //   }
    // );
    //
    // this.chapterForClass9.map(element => {
    //   this.chapters9.push(this.dom.bypassSecurityTrustResourceUrl(element.pdfHref))
    // });

    this.repo.getAllChapterForClass('9').subscribe();

    // this.repo.findChapterByExternalId("ac866eae-15a2-465e-b0a6-5c95dbf21e68").subscribe();
  }

  getAllChapter(): void {
    // class 9
    this.repo.getAllChapterForClass9_mock().subscribe(
      response => {
        this.chapterForClass9 = response
      }
    );

    this.chapterForClass9.map(element => {
      this.chapters9.push(this.dom.bypassSecurityTrustResourceUrl(element.pdfHref))
    });

    // class 10
    this.repo.getAllChapterForClass10_mock().subscribe(
      response => {
        this.chapterForClass10 = response
      }
    );

    this.chapterForClass10.map(element => {
      this.chapters10.push(this.dom.bypassSecurityTrustResourceUrl(element.pdfHref))
    });

    // class 11
    this.repo.getAllChapterForClass11_mock().subscribe(
      response => {
        this.chapterForClass11 = response
      }
    );

    this.chapterForClass11.map(element => {
      this.chapters11.push(this.dom.bypassSecurityTrustResourceUrl(element.pdfHref))
    });

    // class 12
    this.repo.getAllChapterForClass12_mock().subscribe(
      response => {
        this.chapterForClass12 = response
      }
    );

    this.chapterForClass12.map(element => {
      this.chapters12.push(this.dom.bypassSecurityTrustResourceUrl(element.pdfHref))
    });
  }
}
