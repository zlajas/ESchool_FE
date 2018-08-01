import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { LoginUser } from '../../models/loginUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() loggedInUser: LoginUser;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loggedInUser = this.loginService.loggedInUser;
  }

  login(username, password) {
    this.loginService.login(username, password).subscribe(loggedInuser => this.loggedInUser = loggedInuser);
  }

  logout() {
    this.loginService.logout();
    this.loggedInUser = this.loginService.loggedInUser;
  }

  goPlaces() {

    this.router.navigate(['/login']);

  }

}
