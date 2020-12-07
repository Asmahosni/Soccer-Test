import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  matches : any ;
  constructor(private matchService : MatchService) {}

  ngOnInit(): void {
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matches = data.matches;
      }
    )
  }

}
