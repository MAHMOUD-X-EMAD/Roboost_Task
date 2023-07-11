import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserActionService } from '../../Auth/Services/UserActions.Services';
import { StudentActionService } from '../Services/StudentActions.Services';
import { IStudentData } from '../Interfaces/IStudentData.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private formBuilder: FormBuilder, private _router: Router, private _UserActionService: UserActionService,private _StService : StudentActionService) { }
  studentsData : IStudentData[] = []
  ngOnInit(): void {
    
    this.GetAllStudents();
  }

  DeleteSt(St_Id:number){
    this._StService.DeleteStudent(St_Id).subscribe({
      next : data => {
        this.studentsData = data['Data']
        console.log(this.studentsData)
        this.GetAllStudents();
      },
      error : err => console.log(err)
    })
  }

  GetAllStudents(){
    this._StService.GetAllStudents().subscribe({
      next : data => {
        this.studentsData = data['Data']
        console.log(this.studentsData)
      },
      error : err => console.log(err)
    })
  }
}
