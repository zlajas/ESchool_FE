import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { StudentViewDTO } from '../../models/dto/StudentViewDTO';
import { Subject } from '../../models/subject';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsUrl = 'http://localhost:26035/project/students';
  private addStudentUrl = 'http://localhost:26035/project/accounts/register-student'

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getStudents(): Observable<User[]> {
    return this.http.get<User[]>(this.studentsUrl, this.loginService.getOptionsWithToken());  
  }

  getStudent(id: string): Observable<User> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.get<User>(url, this.loginService.getOptionsWithToken());
  }

  getStudentsMarks(id: string): Observable<StudentViewDTO[]> {
    const url = `${this.studentsUrl}/marks/${id}`;
    return this.http.get<StudentViewDTO[]>(url, this.loginService.getOptionsWithToken());
  }

  getStudentsSubjects(id: string): Observable<Subject[]> {

    const url = `${this.studentsUrl}/subjects/${id}`;
    return this.http.get<Subject[]>(url, this.loginService.getOptionsWithToken());
  }

  getRemainingSubjects(id: string): Observable<Subject[]> {

    const url = `${this.studentsUrl}/remaining-subjects/${id}`;
    return this.http.get<Subject[]>(url, this.loginService.getOptionsWithToken());
  }

  updateStudent(student: User): Observable<any> {
    return this.http.put(`${this.studentsUrl}/${student.id}`, student, this.loginService.getOptionsWithToken());
  }

  addStudent(student: User): Observable<User> {
    return this.http.post<User>(this.addStudentUrl, student, this.loginService.getOptionsWithToken());
  }

  addSubjectToStudent(Id: string, subjectId: number) {
    const url = `${this.studentsUrl}/${Id}/addSubjectToStudent/${subjectId}`;
    return this.http
      .put<User>(url, {}, this.loginService.getOptionsWithToken());
  }

  addTeacherToStudentSubject(Id: string, subjectId: number, teacherId: string) {
    const url = `${this.studentsUrl}/${Id}/and/${subjectId}/addTeacherToStudentSubject/${teacherId}`;
    return this.http.put<User>(url, {}, this.loginService.getOptionsWithToken());
  }

  removeStudentSubjectPair(Id: string, subjectId: number) {
    const url = `${this.studentsUrl}/${Id}/deleteSubjectFromStudent/${subjectId}`
    return this.http.put(url, {}, this.loginService.getOptionsWithToken());
  }

  deleteStudent(student: User | string): Observable<User> {
    const id = typeof student === 'string' ? student : student.id;
    const url = `${this.studentsUrl}/${id}`;

    return this.http.delete<User>(url, this.loginService.getOptionsWithToken());
  }
}
