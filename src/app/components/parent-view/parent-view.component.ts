import { Component, OnInit, Input } from '@angular/core';
import { LoginUser } from '../../models/loginUser';
import { ParentViewDTO } from '../../models/dto/ParentViewDTO';
import { LoginService } from '../../services/login.service';
import { ParentsService } from '../../services/parents/parents.service';

@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.css']
})
export class ParentViewComponent implements OnInit {

  @Input() loggedInUser: LoginUser;
  parent: ParentViewDTO;

  constructor(private parentService: ParentsService,
    private loginService: LoginService) { }


  ngOnInit() {
    this.getParentsView();
  }

  getParentsView() {
    this.parentService.getParentsView(this.loggedInUser.UserId)
      .subscribe(p => this.parent = p);
  }

}