import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../models/user';
import {StudentService} from '../../services/students/student.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  @Input() model: User[];
  constructor(private router: Router,
    private location: Location,
    private studentService: StudentService) { }

  addStudent(firstName, lastName, userName, password, confirmPassword, dateOfBirth) {
    this.studentService.addStudent({'id': null, 'firstName': firstName, 'lastName': lastName, 'userName': userName, 'password': password, 'confirmPassword': confirmPassword, 'emailAddress': null, 'dateOfBirth': dateOfBirth, 'subject': null}).subscribe(()  => {alert('Student added!');
    this.router.navigate(['/students']);
  });
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }
}
