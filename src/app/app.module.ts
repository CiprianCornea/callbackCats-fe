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
import {AuthInterceptorProvider} from "./modules/core/interceptors/jwt.interceptor.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {SignUpPageComponent} from "./modules/core/pages/sign-up-page/sign-up-page.component";
import {CoreModule} from "./modules/core/core.module";
import {TestsModule} from "./modules/tests/tests.module";

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
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    MatProgressBarModule,
    CoreModule,
    TestsModule
  ],
  providers: [
    AuthInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
