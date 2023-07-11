import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IAddUser } from '../Interfaces/AddUser.interface';
@Injectable({
  providedIn: 'root'
})
export class UserActionService {
  
  constructor(private _HttpClient: HttpClient,private _Router:Router) { }

  Login(formData: object): Observable<any> {

    return this._HttpClient.post('https://api.mohamed-sadek.com/User/Login', formData);

  }

  AddUser(addUser: IAddUser): Observable<any> {

    return this._HttpClient.post('https://api.mohamed-sadek.com/User/POST', addUser);

  }
  

}