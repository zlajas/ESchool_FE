import { Component, OnInit } from '@angular/core';
import {TeachersService} from '../../services/teachers/teachers.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: User[];

  constructor(private teacherService: TeachersService) { }

  getTeachers(): void {
    this.teacherService.getTeachers()
    .subscribe(
      teachers => this.teachers = teachers
    );
  }

  delete(teacher: User): void {
    this.teachers = this.teachers.filter(h => h !== teacher);
    this.teacherService.deleteTeacher(teacher).subscribe();
  }

  ngOnInit() {
    this.getTeachers();
  }

}
