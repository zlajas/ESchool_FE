import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subject } from '../../models/subject';
import { User } from '../../models/user';
import { LoginService } from '../login.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  private subjectsUrl = 'http://localhost:26035/project/subjects';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectsUrl, this.loginService.getOptionsWithToken());
  }

  getSubject(id: number): Observable<Subject> {
    const url = `${this.subjectsUrl}/${id}`;
    return this.http.get<Subject>(url, this.loginService.getOptionsWithToken());
  }

  getTeacherTeachingSubject(id: number): Observable<User[]> {
    const url = `${this.subjectsUrl}/teachersTeachingSubject/${id}`;
    return this.http.get<User[]>(url, this.loginService.getOptionsWithToken());

  }

  updateSubject(subject: Subject): Observable<any> {
    return this.http.put(`${this.subjectsUrl}/${subject.subjectId}`, subject, this.loginService.getOptionsWithToken());
  }

  addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.subjectsUrl, subject, this.loginService.getOptionsWithToken());
  }
  deleteSubject (subject: Subject | number): Observable<Subject> {
    const id = typeof subject === 'number' ? subject : subject.subjectId;
    const url = `${this.subjectsUrl}/${id}`;
  
    return this.http.delete<Subject>(url, this.loginService.getOptionsWithToken());
  }
}
