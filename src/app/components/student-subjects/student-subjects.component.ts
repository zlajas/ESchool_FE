import { Component, OnInit, Input } from '@angular/core';
import {StudentService} from '../../services/students/student.service';
import {SubjectsService} from '../../services/subjects/subjects.service';
import {User} from '../../models/user';
import {Subject} from '../../models/subject';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-student-subjects',
  templateUrl: './student-subjects.component.html',
  styleUrls: ['./student-subjects.component.css']
})
export class StudentSubjectsComponent implements OnInit {

  studentsSubjects: Subject[];
  @Input() student: User;
  remainingSubjects: Subject[] = [];
  inicijalnoOdabraniTip: string;
  s: Subject;
  studentId = this.route.snapshot.paramMap.get('id');
  teachersTeachingSubject: User[];
  teacher: User;
  teacherTeachingSubjectForThisStudent: User;
  defaultTitle: string = "Choose teacher";
  back: string = "a";
  linkedTeacher: string;
  

  constructor(private route: ActivatedRoute,
    private studentService: StudentService,
    private subjectService: SubjectsService,
    private location: Location) {
      this.student = new User();
     }
 ngOnInit() {
    this.studentService.getStudent(this.studentId).subscribe(s =>this.student = s);
    this.getStudentsSubjects();
    this.getRemainingSubjects();
  }
  getStudentsSubjects(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudentsSubjects(id)
      .subscribe(studentsSubjects => this.studentsSubjects = studentsSubjects);
  }

  getRemainingSubjects() {
    const id = this.route.snapshot.paramMap.get('id');
    this.studentService.getRemainingSubjects(id).subscribe(remainingSubjects => this.remainingSubjects = remainingSubjects);
    
  }

  getTeacherTeachingSubject(s: Subject) {
    this.subjectService.getTeacherTeachingSubject(s.subjectId).subscribe(teachersTeachingSubject => this.teachersTeachingSubject = teachersTeachingSubject);
  }

  addSubjectToStudent() {
    this.studentService.addSubjectToStudent(this.studentId, this.s.subjectId).subscribe(_ => {
      this.studentsSubjects.push(this.s);
      }
    );
  }

addTeacherToStudentSubject(s:Subject, t:User) {
  this.studentService.addTeacherToStudentSubject(this.studentId, s.subjectId, t.id).subscribe(_ => {
    this.teacherTeachingSubjectForThisStudent = this.teacher;
 
  })
}

  removeSubjectFromStudent(s: Subject): void {
    this.studentsSubjects = this.studentsSubjects.filter(h => h !== s);
    this.studentService.removeStudentSubjectPair(this.studentId, s.subjectId).subscribe();
  }
}