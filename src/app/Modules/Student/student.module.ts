import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StudentRoutingModule } from './student-routing.module';
import { CreateStComponent } from './create-st/create-st.component';
import { UpdateStComponent } from './update-st/update-st.component';




@NgModule({
  declarations: [

  
    CreateStComponent,
         UpdateStComponent
  ],
  providers: [


  ],
  imports: [
    StudentRoutingModule,
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule,
   
  ]

})
export class StudentModule { }
