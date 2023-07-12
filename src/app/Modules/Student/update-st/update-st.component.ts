import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentActionService } from '../Services/StudentActions.Services';
import { IUpdateStudent } from '../Interfaces/IUpdateStudent.interface';
import { ICreateStudent } from '../Interfaces/ICreateStudent.interface';

@Component({
  selector: 'app-update-st',
  templateUrl: './update-st.component.html',
  styleUrls: ['./update-st.component.scss']
})
export class UpdateStComponent {
  constructor(private formBuilder: FormBuilder, private _router: Router, private _StService : StudentActionService,private _ActivatedRoute:ActivatedRoute) { }
  StudentId : any;

  CurrentStudent : any 

  studentUpdate : IUpdateStudent = {
    NameArabic: '',
    NameEnglish: '',
    ID: 0,
    FirstName: '',
    LastName: '',
    Mobile: '',
    Email: '',
    NationalID: '',
    Age: 0
  }


  UpdateForm = this.formBuilder.group({ 
    NameArabic: ['', [Validators.required]],
    NameEnglish: ['', [Validators.required]],
    ID: ['', [Validators.required]],
    FirstName: ['', [Validators.required]],
    LastName: ['', [Validators.required]],
    Mobile: ['', [Validators.required]],
    Email: ['', [Validators.required]],
    NationalID: ['', [Validators.required]],
    Age: ['', [Validators.required]],

  });

  get NameArabic() {
    return this.UpdateForm.get('NameArabic');
  }
  get NameEnglish() {
    return this.UpdateForm.get('NameEnglish');
  }
  get ID() {
    return this.UpdateForm.get('ID');
  }
  get FirstName() {
    return this.UpdateForm.get('FirstName');
  }

  get LastName() {
    return this.UpdateForm.get('LastName');
  }
  get Mobile() {
    return this.UpdateForm.get('Mobile');
  }
  get Email() {
    return this.UpdateForm.get('Email');
  }

  get NationalID() {
    return this.UpdateForm.get('NationalID');
  }
  get Age() {
    return this.UpdateForm.get('Age');
  }
  ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe(params => {
      this.StudentId = params.get('id');
      this._StService.GetStudentByID(this.StudentId).subscribe(Response => {
        this.CurrentStudent = Response['Data'];
        console.log(this.CurrentStudent)
      });
    });
  }

  onSubmit(UpdateForm: any) {
     
    this.studentUpdate.ID = UpdateForm.get("ID").value
    this.studentUpdate.NameArabic = UpdateForm.get("NameArabic").value
    this.studentUpdate.NameEnglish = UpdateForm.get("NameEnglish").value
    this.studentUpdate.Mobile = UpdateForm.get("Mobile").value
    this.studentUpdate.Age = UpdateForm.get("Age").value
    this.studentUpdate.NationalID = UpdateForm.get("NationalID").value
    this.studentUpdate.Email = UpdateForm.get("Email").value
    this.studentUpdate.LastName = UpdateForm.get("LastName").value
    this.studentUpdate.FirstName = UpdateForm.get("FirstName").value

    console.log(this.studentUpdate);

    this._StService.UpdateStudent(this.studentUpdate).subscribe({
       next : () => {

          console.log("Recored Added")
          this._router.navigate(['/student/home']);

        },

           error : err => console.log(err)

        }
        
      

    )


       } 
}
