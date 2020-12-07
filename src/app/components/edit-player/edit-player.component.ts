import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  player : any={} ;
  editPlayerForm : FormGroup ;
  id : any ;
  constructor(
     private formBuilder : FormBuilder,
     private playerService : PlayerService , 
     private router : Router,
     private activated : ActivatedRoute) { }
  ngOnInit(): void {
  }

}
