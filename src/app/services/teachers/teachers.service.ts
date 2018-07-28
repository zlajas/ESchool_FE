import { Injectable } from '@angular/core';
import {User} from '../../models/user';
import {Subject} from '../../models/subject';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TeacherViewDTO } from '../../models/dto/TeacherViewDTO';
import { Mark } from '../../models/mark';
import {LoginService} from '../login.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private teachersUrl = 'http://localhost:26035/project/teachers';
  private addTeacherUrl = 'http://localhost:26035/project/accounts/register-teacher';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getTeachers(): Observable<User[]> {
    return this.http.get<User[]>(this.teachersUrl, this.loginService.getOptionsWithToken());
  }

  getTeacher(id: string): Observable<User> {
    const url = `${this.teachersUrl}/${id}`;
    return this.http.get<User>(url, this.loginService.getOptionsWithToken());
  }

  getTeachersSubjects(id:string): Observable<Subject[]> {

    const url = `${this.teachersUrl}/subjects/${id}`;
    return this.http.get<Subject[]>(url, this.loginService.getOptionsWithToken());
  }

  getTeachersView(id:string): Observable<TeacherViewDTO> {
    const url = `${this.teachersUrl}/teachersView/${id}`;
    return this.http.get<TeacherViewDTO>(url, this.loginService.getOptionsWithToken());
  }

  getRemainingSubjects(id:string): Observable<Subject[]> {
    const url = `${this.teachersUrl}/remaining-subjects/${id}`;
    return this.http.get<Subject[]>(url, this.loginService.getOptionsWithToken());
  }

  adddMarkToStudent(Id:string, subjectId: number, teacherId: string, markValue: number): Observable<Mark> {
    const url = `${this.teachersUrl}/${Id}/addMarkToStudent/${subjectId}/${teacherId}/${markValue}`;
    return this.http.post<Mark>(url, markValue, this.loginService.getOptionsWithToken());
  }

  updateTeacher(teacher: User): Observable<any> {
    return this.http.put(`${this.teachersUrl}/${teacher.id}`, teacher, this.loginService.getOptionsWithToken());
  }

  addTeacher(teacher: User): Observable<User> {
    return this.http.post<User>(this.addTeacherUrl, teacher, this.loginService.getOptionsWithToken());
  }

  addSubjectToTeacher(Id: string, subjectId: number) {
    const url = `${this.teachersUrl}/${Id}/addSubjectToTeacher/${subjectId}`;
    return this.http
      .put<User>(url, {}, this.loginService.getOptionsWithToken());
  }

  removeStudentSubjectPair(Id: string, subjectId: number) {
    const url = `${this.teachersUrl}/${Id}/deleteSubjectFromTeacher/${subjectId}`
    return this.http.put(url, this.loginService.getOptionsWithToken());
  }

  deleteTeacher (teacher: User | string): Observable<User> {
    const id = typeof teacher === 'string' ? teacher : teacher.id;
    const url = `${this.teachersUrl}/${id}`;
  
    return this.http.delete<User>(url, this.loginService.getOptionsWithToken());
  }

}
