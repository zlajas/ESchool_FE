import { Component, OnInit, Input } from '@angular/core';
import { LoginUser } from '../../models/loginUser';
import { StudentViewDTO } from '../../models/dto/StudentViewDTO';
import { StudentService } from '../../services/students/student.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  @Input() loggedInUser: LoginUser;
  subjects: StudentViewDTO[];


  constructor(private studentService: StudentService,
    private loginService: LoginService
  ) {
  }



  getStudentsMarks() {
    this.studentService.getStudentsMarks(this.loggedInUser.UserId)
      .subscribe(subjects => this.subjects = subjects);
  }

  ngOnInit() {
    this.getStudentsMarks();
  }

}
