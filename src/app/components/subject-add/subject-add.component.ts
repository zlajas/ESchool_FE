import { Component, OnInit, Input } from '@angular/core';
import {Subject} from '../../models/subject';
import {SubjectsService} from '../../services/subjects/subjects.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent implements OnInit {
  @Input() model: Subject[];
  constructor(private router: Router,
    private location: Location,
    private subjectService: SubjectsService) { }

  ngOnInit() {
  }

  addSubject(subjectName, grade, semester, weeklyFund) {
    this.subjectService.addSubject({'subjectId': null, 'subjectName': subjectName, 'grade': grade, 'semester': semester, 'weeklyFund': weeklyFund}).subscribe(()  => {alert('Subject added!');
    this.router.navigate(['/subjects']);
  });
  }

  goBack() {
    this.location.back();
  }

}
