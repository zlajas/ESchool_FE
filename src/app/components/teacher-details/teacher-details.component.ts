import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TeachersService } from '../../services/teachers/teachers.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
  @Input() teacher: User;
  constructor(
    private route: ActivatedRoute,
    private teacherService: TeachersService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTeacher();
  }

  getTeacher(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.teacherService.getTeacher(id)
      .subscribe(teacher => this.teacher = teacher);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.teacherService.updateTeacher(this.teacher)
      .subscribe(() => this.goBack());
  }

}
