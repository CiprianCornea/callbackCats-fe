import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TestsPageComponent} from "./pages/tests-page/tests-page.component";

const routes: Routes = [
  {
    path: '',
    component: TestsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestsRoutingModule {

}
