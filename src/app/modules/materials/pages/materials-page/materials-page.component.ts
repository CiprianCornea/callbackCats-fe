import {Component, OnInit} from '@angular/core';
import {ChapterRepository} from "../../services/chapter.repository";
import {Chapter} from "../../models/chapter";

@Component({
  selector: 'app-materials-page',
  templateUrl: './materials-page.component.html',
  styleUrls: ['./materials-page.component.scss']
})
export class MaterialsPageComponent implements OnInit {
  public c9=false;
  public c10=true;
  public c11=true;
  public c12=true;

  constructor(
    private repo: ChapterRepository
  ) { }

  modifyC9() {
    this.c9 = !this.c9;
  }
  modifyC10() {
    this.c10 = !this.c10;
  }
  modifyC11() {
    this.c11 = !this.c11;
  }
  modifyC12() {
    this.c12 = !this.c12;
  }

  ngOnInit(): void {
    let chapter: Chapter = new Chapter();
    chapter.chapterId = "12345";
    chapter.chapterCode="A";
    chapter.pdfHref = "sss";
    chapter.chapterName = "ufffn";
    //this.repo.addChapter(chapter).subscribe(res => console.log(res));
    //this.repo.deleteChapter("123").subscribe();
  }

}
