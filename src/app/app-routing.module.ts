import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  { path: 'auth', loadChildren: () => import('./Modules/Auth/auth.module').then(m => m.AuthModule) },
  { path: 'student', loadChildren: () => import('./Modules/Student/student.module').then(m => m.StudentModule) },
  { path: '**', loadChildren: () => import('./Modules/Auth/auth.module').then(m => m.AuthModule) },

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
