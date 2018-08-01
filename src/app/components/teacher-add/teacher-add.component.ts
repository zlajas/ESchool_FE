import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { TeachersService } from '../../services/teachers/teachers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {
  @Input() model: User[];
  constructor(private router: Router,
    private location: Location,
    private teacherService: TeachersService) { }

  addTeacher(firstName, lastName, userName, password, confirmPassword, emailAddress) {
    this.teacherService.addTeacher({ 'id': null, 'firstName': firstName, 'lastName': lastName, 'userName': userName, 'password': password, 'confirmPassword': confirmPassword, 'emailAddress': emailAddress, 'dateOfBirth': null, 'subject': null }).subscribe(() => {
      alert('Teacher added!');
      this.router.navigate(['/teachers']);
    });
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
