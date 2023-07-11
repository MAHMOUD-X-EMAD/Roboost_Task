import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { UserActionService } from '../Services/UserActions.Services';
import { ILoginUser } from '../Interfaces/LoginUser.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private _router: Router, private _UserActionService: UserActionService) { }
  loginUser : ILoginUser = {
    userName: '',
    password: ''
  }
  invalidUser = false;
  LoginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],

    password: ['', [Validators.required]],

  });
  get UserName() {
    return this.LoginForm.get('username');
  }

  get password() {
    return this.LoginForm.get('password');
  }
  ngOnInit(): void {

  }

  onSubmit(LoginForm: FormGroup) {

    if (this.LoginForm.valid) {
     
      this.loginUser.password = LoginForm.get("password")?.value;
      this.loginUser.userName = LoginForm.get("username")?.value;

      this._UserActionService.Login(this.loginUser).subscribe({
       next : data => {
        if(data['Message']=="invalid user"){
          this.invalidUser=true;
        }
        else{
        console.log(data)
        this._router.navigate(['/student/home']);
        }
      },
        error : err => console.log(err)
      }
      )
      

    } else {
      console.log('Not Valid.');

    }
  }


  show() {
    var x = document.getElementById("password")as HTMLInputElement;
    $("#eye").toggleClass('fa-eye fa-eye-slash');
   if (x.type == "password") {
      x.type = "text";
    } else {
      x.type = "password";
      console.log("pass")
    }
  }
}
