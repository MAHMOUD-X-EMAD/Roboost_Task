import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ICreateStudent } from '../Interfaces/ICreateStudent.interface';
import { IUpdateStudent } from '../Interfaces/IUpdateStudent.interface';
@Injectable({
  providedIn: 'root'
})
export class StudentActionService {
  
  constructor(private _HttpClient: HttpClient,private _Router:Router) { }

  GetAllStudents(): Observable<any> {

    return this._HttpClient.get('https://api.mohamed-sadek.com/Student/Get');

  }
  GetStudentByID(st_id:number): Observable<any> {

    return this._HttpClient.get(`https://api.mohamed-sadek.com/Student/GetByID?id=${st_id}`);

  }
 
  CreateStudent(studentToAdd : ICreateStudent): Observable<any>{

    return this._HttpClient.post('https://api.mohamed-sadek.com/Student/POST' , studentToAdd);


  }

  UpdateStudent(studentToUpdate : IUpdateStudent): Observable<any>{

    return this._HttpClient.put('https://api.mohamed-sadek.com/Student/PUT' , studentToUpdate);


  }
  DeleteStudent(studentToDeleteId : number): Observable<any>{

    return this._HttpClient.delete(`https://api.mohamed-sadek.com/Student/Delete?id=${studentToDeleteId}`);


  }
  
  

}