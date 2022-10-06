import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './component/form/form.component';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  {path:"",redirectTo:'',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'admin', component:FormComponent},
  {path:'user', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
