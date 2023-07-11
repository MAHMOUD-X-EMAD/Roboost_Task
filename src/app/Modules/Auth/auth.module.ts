import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [


  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule,
   
  ]

})
export class AuthModule { }
