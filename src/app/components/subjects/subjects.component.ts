import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../services/subjects/subjects.service';
import { Subject } from '../../models/subject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private subjectsService: SubjectsService) { }

  subjects: Subject[];

  getSubjects(): void {
    this.subjectsService.getSubjects()
      .subscribe(
        subjects => this.subjects = subjects
      );
  }

  delete(subject: Subject): void {
    this.subjects = this.subjects.filter(h => h !== subject);
    this.subjectsService.deleteSubject(subject).subscribe();
  }

  ngOnInit() {
    this.getSubjects();
  }

}
