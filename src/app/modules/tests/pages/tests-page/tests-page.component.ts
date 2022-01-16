import {Component, OnInit} from '@angular/core';
import {ProblemRepository} from "../../services/problem.repository";
import {ProblemResponseDto} from "../../models/dto/problem-response.dto";
import {FormBuilder, FormGroup} from "@angular/forms";

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
  public test1: ProblemResponseDto[] = [];
  quizForm!: FormGroup;
  public trigonometrie = true;

  constructor(private problemsRepo: ProblemRepository,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.quizForm = this.formBuilder.group({
      pb1: [''],
      pb2: [''],
      pb3: [''],
      pb4: [''],
      pb5: ['']
    })
    this.problemsRepo.getProblemsByChapterExternalId("ab49b9dd-9f4b-4485-8477-abb223097dfb").subscribe(
      response => this.test1 = response
    );
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


  onSubmit() {
    this.verificat = !this.verificat
  }

  showTest() {
    this.trigonometrie = !this.trigonometrie;
  }
}
