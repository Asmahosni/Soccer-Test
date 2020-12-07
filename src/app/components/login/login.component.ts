import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedInUser : any ={};
  loginForm : FormGroup ;

  constructor(
    private userService: UserService,
    private x:FormBuilder,
    private router : Router) {}

  ngOnInit(): void {
    this.loginForm = this.x.group({
      email:[''],
      password : ['']
    })
  }
  login(){
    this.userService.login(this.loggedInUser).subscribe(
      data => {
        console.log("here data",data.user[0]);
        location.reload();
        localStorage.setItem('connectedUserFName',data.user[0].firstName);
        localStorage.setItem('connectedUserLName',data.user[0].lastName);
        
        
      }
    )
    this.router.navigate(['']);
  }
}
