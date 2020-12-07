import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:any = {};
  contactForm :FormGroup;

  constructor(private x:FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.x.group({
      firstName : [''],
      lastName:[''],
      email:[''],
      subject:['']
    })
  }
  addContact(){
    console.log('contact',this.contact);
  }
}
