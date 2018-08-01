import { Component, OnInit, Input } from '@angular/core';
import { SubjectsService } from '../../services/subjects/subjects.service';
import { User } from '../../models/user';
import { Subject } from '../../models/subject';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TeachersService } from '../../services/teachers/teachers.service';

@Component({
  selector: 'app-teacher-subjects',
  templateUrl: './teacher-subjects.component.html',
  styleUrls: ['./teacher-subjects.component.css']
})
export class TeacherSubjectsComponent implements OnInit {

  teachersSubjects: Subject[];
  @Input() teacher: User;
  remainingSubjects: Subject[] = [];
  inicijalnoOdabraniTip: string;
  s: Subject;
  teacherId = this.route.snapshot.paramMap.get('id');


  constructor(private route: ActivatedRoute,
    private teacherService: TeachersService,
    private subjectService: SubjectsService,
    private location: Location) {
    this.teacher = new User();
  }
  ngOnInit() {
    this.teacherService.getTeacher(this.teacherId).subscribe(s => this.teacher = s);
    this.getTeachersSubjects();
    this.getRemainingSubjects();
  }
  getTeachersSubjects(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.teacherService.getTeachersSubjects(id)
      .subscribe(teachersSubjects => this.teachersSubjects = teachersSubjects);
  }

  getRemainingSubjects() {
    const id = this.route.snapshot.paramMap.get('id');
    this.teacherService.getRemainingSubjects(id).subscribe(remainingSubjects => this.remainingSubjects = remainingSubjects);

  }
  addSubjectToTeacher() {
    this.teacherService.addSubjectToTeacher(this.teacherId, this.s.subjectId).subscribe(_ => {
      this.teachersSubjects.push(this.s);
    }
    );
  }

  removeSubjectFromTeacher(s: Subject): void {
    this.teachersSubjects = this.teachersSubjects.filter(h => h !== s);
    this.teacherService.removeStudentSubjectPair(this.teacherId, s.subjectId).subscribe();
  }
}
