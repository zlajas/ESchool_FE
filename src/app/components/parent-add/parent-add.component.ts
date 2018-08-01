import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ParentsService } from '../../services/parents/parents.service';

@Component({
  selector: 'app-parent-add',
  templateUrl: './parent-add.component.html',
  styleUrls: ['./parent-add.component.css']
})
export class ParentAddComponent implements OnInit {

  @Input() model: User[];
  constructor(private router: Router,
    private location: Location,
    private parentService: ParentsService) { }

  addParent(firstName, lastName, userName, password, confirmPassword, emailAddress) {
    this.parentService.addParent({ 'id': null, 'firstName': firstName, 'lastName': lastName, 'userName': userName, 'password': password, 'confirmPassword': confirmPassword, 'emailAddress': emailAddress, 'dateOfBirth': null, 'subject': null }).subscribe(() => {
      alert('Parent je uspešno dodat!');
      this.router.navigate(['/parents']);
    });
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }
}