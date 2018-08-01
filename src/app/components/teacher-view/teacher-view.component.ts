import { Component, OnInit, Input } from '@angular/core';
import { LoginUser } from '../../models/loginUser';
import { TeacherViewDTO, StudentsAndMarksDTO, SubjectsOfTeacherDTO } from '../../models/dto/TeacherViewDTO';
import { LoginService } from '../../services/login.service';
import { TeachersService } from '../../services/teachers/teachers.service';
import { Mark } from '../../models/mark';
import { Subject } from '../../models/subject';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent implements OnInit {

  teachersSubjects: Subject[];
  @Input() loggedInUser: LoginUser;
  teacher: TeacherViewDTO;
  markValues: number[] = [1, 2, 3, 4, 5];
  mValue: number;
  @Input() marks: Mark[];
  students: StudentsAndMarksDTO;

  constructor(private teacherService: TeachersService,
    private loginService: LoginService) { }


  ngOnInit() {
    this.getTeachersView();
  }

  getTeachersView() {
    this.teacherService.getTeachersView(this.loggedInUser.UserId)
      .subscribe(t => this.teacher = t);
  }

  addMarkToStudent(student: StudentsAndMarksDTO, subject: SubjectsOfTeacherDTO, mValue: number) {
    this.teacherService.adddMarkToStudent(student.studentId, subject.subjectId, this.loggedInUser.UserId, mValue).subscribe(m => {
      this.teacher.teachersAndSubjects.find(sub => sub.subjectId == subject.subjectId).studentsWithMarks.find(stu => stu.studentId == student.studentId).marks.push(m);
    })
  }

}
