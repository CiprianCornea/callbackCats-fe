import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.scss']
})
export class TestsPageComponent implements OnInit {
  public c9 = false;
  public c10 = true;
  public c11 = true;
  public c12 = true;
  public checkTest = true;
  public verificat = true;

  constructor() {
  }

  ngOnInit(): void {
  }

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

  showSolution() {
    this.checkTest = !this.checkTest;
  }

  eVerificat() {
    this.verificat = !this.verificat;
  }

}
