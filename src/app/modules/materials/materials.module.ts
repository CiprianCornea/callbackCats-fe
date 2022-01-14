import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsPageComponent } from './pages/materials-page/materials-page.component';
import {PdfViewerModule} from "ng2-pdf-viewer";

@NgModule({
  declarations: [MaterialsPageComponent],
  imports: [
    CommonModule,
    PdfViewerModule
  ]
})
export class MaterialsModule { }
