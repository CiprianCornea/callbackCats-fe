import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsPageComponent } from './pages/tests-page/tests-page.component';
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    TestsPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TestsModule { }
