import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ParentsService } from '../../services/parents/parents.service';

@Component({
  selector: 'app-parent-students',
  templateUrl: './parent-students.component.html',
  styleUrls: ['./parent-students.component.css']
})
export class ParentStudentsComponent implements OnInit {

  parentsKids: User[];
  @Input() parent: User;
  remainingStudents: User[] = [];
  inicijalnoOdabraniTip: string;
  student: User;
  parentId = this.route.snapshot.paramMap.get('id');


  constructor(private route: ActivatedRoute,
    private parentService: ParentsService,
    private location: Location) {
    this.parent = new User();
  }
  ngOnInit() {
    this.parentService.getParent(this.parentId).subscribe(p => this.parent = p);
    this.getParentsKids();
    this.getRemainingStudents();
  }
  getParentsKids(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.parentService.getParentsKids(id)
      .subscribe(parentsKids => this.parentsKids = parentsKids);
  }

  getRemainingStudents() {
    const id = this.route.snapshot.paramMap.get('id');
    this.parentService.getRemainingStudents(id).subscribe(remainingStudents => this.remainingStudents = remainingStudents);

  }
  addStudentToParent() {
    this.parentService.addStudentToParent(this.parentId, this.student.id).subscribe(_ => {
      this.parentsKids.push(this.student);
    }
    );
  }
  removeStudentFromParent(s: User): void {
    this.parentsKids = this.parentsKids.filter(h => h !== s);
    this.parentService.removeParentStudentPair(this.parentId, s.id).subscribe();
  }
}