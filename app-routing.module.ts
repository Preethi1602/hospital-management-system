import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MasterdataComponent } from './masterdata/masterdata.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'view',component:ViewComponent},
  {path:'mybookings',component:MybookingsComponent},
  {path:'masterdata',component:MasterdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
