import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  stadium: any = {};
  addStadiumForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private stadiumService: StadiumService,
    private router: Router) { }

  ngOnInit(): void {
    this.addStadiumForm = this.formBuilder.group({
      name: [''],
      country: [''],
      capacity: ['']
  })
}

  addStadium() {
    console.log('object', this.stadium);
    this.stadiumService.addStadium(this.stadium).subscribe(
      () => {
        console.log('stadium added successfully');
        this.router.navigate(['admin']);
      }
    )
  }

 
}
