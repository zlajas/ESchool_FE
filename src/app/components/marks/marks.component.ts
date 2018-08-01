import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../../services/students/student.service';
import { User } from '../../models/user';
import { Mark } from '../../models/mark';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SubjectsService } from '../../services/subjects/subjects.service';
import { MarksService } from '../../services/marks/marks.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  @Input() student: User;
  allMarks: Mark[] = [];
  mark: Mark;
  marks: Mark[];
  m: Mark;
  studentId = this.route.snapshot.paramMap.get('id');
  subjectId = +this.route.snapshot.paramMap.get('subjectId');
  markValues: number[] = [1, 2, 3, 4, 5];
  mValue: number;

  constructor(private route: ActivatedRoute,
    private studentService: StudentService,
    private subjectService: SubjectsService,
    private marksService: MarksService,
    private location: Location) {
  }

  getAllMarks(): void {
    this.marksService.getAllMarks()
      .subscribe(
        allMarks => this.allMarks = allMarks
      );
  }

  getStudentsMarksForSubject(): void {
    this.marksService.getStudentsMarksForSubject(this.studentId, this.subjectId)
      .subscribe(marks => this.marks = marks);
  }

  adminAddMarkToStudent() {
    this.marksService.adminAddMarkToStudent(this.studentId, this.subjectId, this.mValue).subscribe(m => {
      this.marks.push(m);
    })
  }

  editMark(mark: Mark): void {

  }

  delete(mark: Mark): void {
    this.marks = this.marks.filter(h => h !== mark);
    this.marksService.deleteMark(mark).subscribe();
  }

  save(mark: Mark): void {
    this.marksService.updateMark(mark)
      .subscribe();
  }

  ngOnInit() {
    this.getStudentsMarksForSubject();

  }

}
