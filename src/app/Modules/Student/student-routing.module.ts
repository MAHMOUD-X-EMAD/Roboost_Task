import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateStComponent } from './create-st/create-st.component';
import { UpdateStComponent } from './update-st/update-st.component';



const routes: Routes = [
 
  { path: 'home',component:HomeComponent},
  { path: 'create',component:CreateStComponent},
  { path: 'update/:id',component:UpdateStComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class StudentRoutingModule { }