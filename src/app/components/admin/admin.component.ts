import { Component, OnInit, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';
import { StadiumService } from 'src/app/services/stadium.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  allUsers: any;
  allPlayers : any;
  allMatches : any;
  stadiums :any ;
  constructor(
    private matchService : MatchService,
    private playerService : PlayerService , 
    private userService : UserService ,
    private stadiumService : StadiumService ,
    private router : Router) { };
  
  ngOnInit() {
    this.allUsers = [
      {id:1,nom: 'asma',prenom:'hosni',email:'asmahosni@gmail.com',tel:'23761199',adresse:'tunis'},
      {id:2,nom: 'asma2',prenom:'hosni2',email:'asmahosni2@gmail.com',tel:'2375559',adresse:'sfax'}
    ];
    this.getPlayers();
    this.getMatches();
    this.getUsers();
    this.getStadiums();
  }
  getStadiums(){
    this.stadiumService.getAllStadiums().subscribe(
      data => {
        this.stadiums = data.stadiums ;
      }
    );
  }
  getUsers(){
    this.userService.getAllUsers().subscribe(
      data => {
        this.allUsers = data.users ;
      }
    );
  }
  getPlayers(){
    this.playerService.getAllPlayers().subscribe(
      data => {
        this.allPlayers = data.players ;
      }
    );
  }
  getMatches(){
    this.matchService.getAllMatches().subscribe(
      data => {
        this.allMatches = data.matches ;
      }
    )
  }
  displayId(id : any){
    alert(id);
  }
  delete(id:string){
    this.matchService.deleteMatch(id).subscribe(
      ()=>{
        console.log('match deleted successfully');
        this.getMatches();
      }
      );
  }
  display(id : any){
    this.router.navigate([`displayMatch/${id}`]);
  }
  edit(id : string){
    this.router.navigate([`editMatch/${id}`]);
  }
  editPlayer(id : string){
    this.router.navigate([`editPlayer/${id}`])
  }
  deletePlayer(id:string){
    this.playerService.deletePlayer(id).subscribe(
      ()=>{
        console.log('player deleted successfully');
        this.getPlayers() ;    
      }
    )
  }
  updateStadiums(stadiums : any){
    this.stadiums = stadiums
  }
}
