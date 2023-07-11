import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserActionService } from '../Services/UserActions.Services';
import * as $ from 'jquery';
import { IAddUser } from '../Interfaces/AddUser.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  error: any;
  addUser : IAddUser = {
    name: '',
    userName: '',
    password: ''
  }
  constructor(private formBuilder: FormBuilder, private _router: Router, private _UserActionService: UserActionService) { }

  RegisterForm = this.formBuilder.group({ 
    userName: ['', [Validators.required]],
    name: ['', [Validators.required]],
    password: ['', [Validators.required]],

  });
  get userName() {
    return this.RegisterForm.get('userName');
  }

  get password() {
    return this.RegisterForm.get('password');
  }
  get name() {
    return this.RegisterForm.get('name');
  }
  ngOnInit(): void {

  }
  show() {
    var x = document.getElementById("pass")as HTMLInputElement;
    $("#eye").toggleClass('fa-eye fa-eye-slash');
   if (x.type == "password") {
      x.type = "text";
    } else {
      x.type = "password";
      console.log("pass")
    }
  }

  onSubmit(RegisterForm: any) {
     
     
    if (this.RegisterForm.valid) {
  
 
    this.addUser.name = RegisterForm.get("name").value
    this.addUser.password = RegisterForm.get("password").value
    this.addUser.userName = RegisterForm.get("userName").value
    
    this._UserActionService.AddUser(this.addUser).subscribe({
       next : () => {

          console.log("Recored Added")
          this._router.navigate(['/auth/Login']);

        },

           error : err => console.log(err)

        }
        
      

    )


       } else {
    alert('بيناتك غير صحيحه !')
    console.log('Please check at least one option.');
    console.log('Selected options:', this.RegisterForm.value)
  }
}

}
