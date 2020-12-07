import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm : FormGroup;
  imagePreview : any ;
  constructor(
    private formBuilder : FormBuilder,
    private userService : UserService ,
    private router : Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName : ['', [Validators.minLength(3),Validators.required]],
      lastName : ['', [Validators.minLength(6),Validators.required]],
      email : ['', [Validators.email,Validators.required]],
      password: ['', [Validators.minLength(8),Validators.required]],
      cPassword: [''],
      image : ['']
    } ,
    {
      validator: MustMatch('password','cPassword')
      }
    )
  }
  signUp(user:any){
    console.log('user',user);
    this.userService.addUser(user, this.signUpForm.value.image).subscribe(
      () => {
        console.log('user added successfully',user);
        this.router.navigate(['admin'])
        
      }
    )
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signUpForm.patchValue({ image : file });
    this.signUpForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
}
