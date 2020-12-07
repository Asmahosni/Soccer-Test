import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players : any;
  constructor(
    private playerService:PlayerService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(
      data => {
        this.players = data.players ;
      }
    )
  }
  
}
