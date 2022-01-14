import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Bac360Module} from "./modules/bac360/bac360.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MaterialsModule} from "./modules/materials/materials.module";

// import {BasicAuthHttpInterceptorService} from "./modules/core/interceptors/basic-auth-http-interceptor.service";

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Bac360Module,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    CommonModule,
    MaterialsModule,
  ],
  providers: [
    // {
    //   provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
