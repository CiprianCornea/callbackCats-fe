import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AboutPageComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class AboutModule { }
