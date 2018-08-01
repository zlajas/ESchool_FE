import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../../models/subject';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SubjectsService } from '../../services/subjects/subjects.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {

  @Input() subject: Subject;
  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSubject();
  }

  getSubject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subjectService.getSubject(id)
      .subscribe(subject => this.subject = subject);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.subjectService.updateSubject(this.subject)
      .subscribe(() => this.goBack());
  }


}
