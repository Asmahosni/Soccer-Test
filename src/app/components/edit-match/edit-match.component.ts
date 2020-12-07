import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  match : any={} ;
  editMatchForm : FormGroup ;
  id : any ;
  constructor(
     private formBuilder : FormBuilder,
     private matchService : MatchService , 
     private router : Router,
     private activated : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      data =>{
        this.match = data.match
      }
    );
    this.editMatchForm = this.formBuilder.group({
      teamOne : [''],
      scoreOne : [''],
      teamTwo : [''],
      scoreTwo : ['']
    })
  }
  editMatch(){
    this.matchService.editMatch(this.match).subscribe(
      ()=>{
        this.router.navigate(['admin']);
      }
    )
  }
}
