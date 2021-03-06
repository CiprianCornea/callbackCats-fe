import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./modules/bac360/pages/home-page/home-page.component";
import {AboutPageComponent} from "./modules/about/pages/about-page/about-page.component";
import {ContactPageComponent} from "./modules/contact/pages/contact-page/contact-page.component";
import {MaterialsPageComponent} from "./modules/materials/pages/materials-page/materials-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'materials', component: MaterialsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
