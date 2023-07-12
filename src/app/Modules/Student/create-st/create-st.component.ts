import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentActionService } from '../Services/StudentActions.Services';
import { ICreateStudent } from '../Interfaces/ICreateStudent.interface';
import { IUpdateStudent } from '../Interfaces/IUpdateStudent.interface';

@Component({
  selector: 'app-create-st',
  templateUrl: './create-st.component.html',
  styleUrls: ['./create-st.component.scss']
})
export class CreateStComponent {

  constructor(private formBuilder: FormBuilder, private _router: Router, private _StService : StudentActionService,private _ActivatedRoute:ActivatedRoute) { }
  

  studentAdd : ICreateStudent ={
      FirstName: '',
      LastName: '',
      Mobile: '',
      Email: '',
      NationalID: '',
      Age: 0
 }

  CreateForm = this.formBuilder.group({ 
    FirstName: ['', [Validators.required]],
    LastName: ['', [Validators.required]],
    Mobile: ['', [Validators.required]],
    Email: ['', [Validators.required]],
    NationalID: ['', [Validators.required]],
    Age: ['', [Validators.required]],

  });

  get FirstName() {
    return this.CreateForm.get('FirstName');
  }

  get LastName() {
    return this.CreateForm.get('LastName');
  }
  get Mobile() {
    return this.CreateForm.get('Mobile');
  }
  get Email() {
    return this.CreateForm.get('Email');
  }

  get NationalID() {
    return this.CreateForm.get('NationalID');
  }
  get Age() {
    return this.CreateForm.get('Age');
  }
  ngOnInit(): void {
    
    
  }

  onSubmit(CreateForm: any) {
     
 
    
    this.studentAdd.Mobile = CreateForm.get("Mobile").value
    this.studentAdd.Age = CreateForm.get("Age").value
    this.studentAdd.NationalID = CreateForm.get("NationalID").value
    this.studentAdd.Email = CreateForm.get("Email").value
    this.studentAdd.LastName = CreateForm.get("LastName").value
    this.studentAdd.FirstName = CreateForm.get("FirstName").value
    
    this._StService.CreateStudent(this.studentAdd).subscribe({
       next : () => {

          console.log("Recored Added")
          this._router.navigate(['/student/home']);

        },

           error : err => console.log(err)

        }
    )} 
}
