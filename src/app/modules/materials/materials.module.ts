import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsPageComponent } from './pages/materials-page/materials-page.component';
import {PdfViewerModule} from "ng2-pdf-viewer";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [MaterialsPageComponent],
    imports: [
        CommonModule,
        PdfViewerModule,
        MatProgressBarModule
    ]
})
export class MaterialsModule { }
