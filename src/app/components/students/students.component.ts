import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/students/student.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

studentsey: User[];

  constructor(private studentService: StudentService) { }

  getStudents(): void {
    this.studentService.getStudents()
    .subscribe(
      students => this.studentsey = students
    );
  }

  delete(student: User): void {
    this.studentsey = this.studentsey.filter(h => h !== student);
    this.studentService.deleteStudent(student).subscribe();
  }

  ngOnInit() {
    this.getStudents();
  }

}
