import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Mark } from '../../models/mark';
import { LoginService } from '../login.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  private marksUrl = 'http://localhost:26035/project/marks';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getStudentsMarksForSubject(Id: string, subjectId: number): Observable<Mark[]> {
    const url = `${this.marksUrl}/${Id}/getMarks/${subjectId}`;
    return this.http.get<Mark[]>(url, this.loginService.getOptionsWithToken());
  }

  getAllMarks(): Observable<Mark[]> {
    return this.http.get<Mark[]>(this.marksUrl, this.loginService.getOptionsWithToken());
  }

  getMark(id: number): Observable<Mark> {
    const url = `${this.marksUrl}/${id}`;
    return this.http.get<Mark>(url, this.loginService.getOptionsWithToken());
  }

  adminAddMarkToStudent(Id:string, subjectId: number, markValue: number) {
    const url = `${this.marksUrl}/${Id}/addMarkToStudentAsAdmin/${subjectId}/${markValue}`;
    return this.http.put<Mark>(url,{}, this.loginService.getOptionsWithToken());
  }

  updateMark(mark: Mark): Observable<any> {
    return this.http.put(`${this.marksUrl}/${mark.id}`, mark, this.loginService.getOptionsWithToken());
  }

  addMark(mark: Mark): Observable<Mark> {
    return this.http.post<Mark>(this.marksUrl, mark, this.loginService.getOptionsWithToken());
  }

  deleteMark (mark: Mark | number): Observable<Mark> {
    const id = typeof mark === 'number' ? mark : mark.id;
    const url = `${this.marksUrl}/${id}`;
  
    return this.http.delete<Mark>(url, this.loginService.getOptionsWithToken());
  }
}
