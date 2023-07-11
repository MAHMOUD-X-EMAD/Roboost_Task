import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
 
  { path: 'Login',component:LoginComponent},
  { path: 'Register',component:RegisterComponent },
  { path: '**',component:RegisterComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class AuthRoutingModule { }