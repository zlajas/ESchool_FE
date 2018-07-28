import { Injectable } from '@angular/core';
import {User} from '../../models/user';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ParentViewDTO } from '../../models/dto/ParentViewDTO';
import { LoginService } from '../login.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ParentsService {

  private parentsUrl = 'http://localhost:26035/project/parents';
  private addParentUrl = 'http://localhost:26035/project/accounts/register-parent'

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getParents(): Observable<User[]> {
    return this.http.get<User[]>(this.parentsUrl, this.loginService.getOptionsWithToken());
  }

  getParent(id: string): Observable<User> {
    const url = `${this.parentsUrl}/${id}`;
    return this.http.get<User>(url, this.loginService.getOptionsWithToken());
  }

  getParentsKids(id:string): Observable<User[]> {

    const url = `${this.parentsUrl}/children/${id}`;
    return this.http.get<User[]>(url, this.loginService.getOptionsWithToken());
  }

  getParentsView(id:string): Observable<ParentViewDTO> {
    const url = `${this.parentsUrl}/parentsView/${id}`;
    return this.http.get<ParentViewDTO>(url, this.loginService.getOptionsWithToken());
  }

  getRemainingStudents(id:string): Observable<User[]> {

    const url = `${this.parentsUrl}/remaining-students/${id}`;
    return this.http.get<User[]>(url, this.loginService.getOptionsWithToken());
  }

  updateParent(parent: User): Observable<any> {
    return this.http.put(`${this.parentsUrl}/${parent.id}`, parent, this.loginService.getOptionsWithToken());
  }

  addParent(parent: User): Observable<User> {
    return this.http.post<User>(this.addParentUrl, parent, this.loginService.getOptionsWithToken());
  }

  addStudentToParent(Id: string, studentId: string) {
    const url = `${this.parentsUrl}/${Id}/addStudentToParent/${studentId}`;
    return this.http
      .put<User>(url, {}, this.loginService.getOptionsWithToken());
  }

  removeParentStudentPair(Id: string, studentId: string) {
    const url = `${this.parentsUrl}/${Id}/removeStudentFromParent/${studentId}`
    return this.http.put(url, {}, this.loginService.getOptionsWithToken());
  }

  deleteParent (parent: User | string): Observable<User> {
    const id = typeof parent === 'string' ? parent : parent.id;
    const url = `${this.parentsUrl}/${id}`;
  
    return this.http.delete<User>(url, this.loginService.getOptionsWithToken());
  }
}
