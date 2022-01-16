import {Component, OnInit} from '@angular/core';
import {ChapterRepository} from "../../services/chapter.repository";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ChapterResponseDto} from "../../models/dto/chapter-response.dto";
import {ChapterForHtml} from "../../models/chapter-for-html";

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

  public chapters9: ChapterForHtml[] = [];
  public chapters10: ChapterForHtml[] = [];
  public chapters11: ChapterForHtml[] = [];
  public chapters12: ChapterForHtml[] = [];
  public classProgress!: number;
  public isDone9 = false;


  constructor(
    private repo: ChapterRepository,
    private dom: DomSanitizer
  ) {
  }

  modifyC9() {
    // this.ngOnInit();
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
    this.getAllChapters();
    // if(this.show_class9) {
      this.repo.getProgressForClass(9).subscribe(res => this.classProgress = res);
    // }

    // if(this.show_class10) {
    //   this.repo.getProgressForClass(10).subscribe(res => this.classProgress = res);
    // }
    //
    // if(this.show_class11) {
    //   this.repo.getProgressForClass(11).subscribe(res => this.classProgress = res);
    // }
    //
    // if(this.show_class12) {
    //   this.repo.getProgressForClass(12).subscribe(res => this.classProgress = res);
    // }
  }

  getAllChapters() {
    this.repo.getAllChapterForClass('9').subscribe(res => {
      this.chapterForClass9 = res;
      this.chapterForClass9.map(element => {
        this.chapters9.push({'chapterUrl': this.dom.bypassSecurityTrustResourceUrl(element.pdfHref), 'id': element.externalId, 'chapterCode': element.chapterCode})
      });
    });

    this.repo.getAllChapterForClass('10').subscribe(res => {
      this.chapterForClass10 = res;
      this.chapterForClass10.map(element => {
        this.chapters10.push({'chapterUrl': this.dom.bypassSecurityTrustResourceUrl(element.pdfHref), 'id': element.externalId, 'chapterCode': element.chapterCode})
      });
    });

    this.repo.getAllChapterForClass('11').subscribe(res => {
      this.chapterForClass11 = res;
      this.chapterForClass11.map(element => {
        this.chapters11.push({'chapterUrl': this.dom.bypassSecurityTrustResourceUrl(element.pdfHref), 'id': element.externalId, 'chapterCode': element.chapterCode})
      });
    });

    this.repo.getAllChapterForClass('12').subscribe(res => {
      this.chapterForClass12 = res;
      this.chapterForClass12.map(element => {
        this.chapters12.push({'chapterUrl': this.dom.bypassSecurityTrustResourceUrl(element.pdfHref), 'id': element.externalId, 'chapterCode': element.chapterCode})
      });
    });
  }

  chapterDone(chapterId: string, chapterCode: string) {
    this.repo.changeChapterStatus(chapterCode).subscribe(res => {
      this.repo.isChapterDone(chapterId).subscribe(res => this.isDone9 = res);
      console.log(this.isDone9)
    });
  }

  getChapterStatus(chapterCode: string) {
    let isDone: boolean = false;
    this.repo.changeChapterStatus(chapterCode).subscribe(res => isDone = res);
    console.log(isDone)
    return isDone;
  }



}
