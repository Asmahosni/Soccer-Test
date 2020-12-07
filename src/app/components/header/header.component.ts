import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  firstName : string;
  lastName : string ;
  actualDate : Date ;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.firstName = localStorage.getItem('connectedUserFName');
    this.lastName = localStorage.getItem('connectedUserLName');
  }
  goToSignup () {
    this.router.navigate(['signup']);
  }
  goToLogin() {
    this.router.navigate(['login']);
  }
  logout(){
    localStorage.removeItem('connectedUserFName');
    localStorage.removeItem('connectedUserLName');
    this.router.navigate(['']);
    location.reload();
  }
}
