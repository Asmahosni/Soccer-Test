import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { AdminComponent } from './components/admin/admin.component';

import { ContactComponent } from './components/contact/contact.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlayersComponent } from './components/players/players.component';
import { ServiceComponent } from './components/service/service.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  //localhost:4200: url de base
  {path:'',component : HomeComponent },
  //localhost:4200/contact => afficher contact
  {path:'contact',component : ContactComponent },
  //localhost:4200/contact => afficher service
  {path:'service',component : ServiceComponent },
  {path:'signup',component : SignupComponent },
  {path:'login',component : LoginComponent },
  {path:'matches',component : MatchesComponent },
  {path:'admin',component : AdminComponent},
  {path:'players',component : PlayersComponent},
  {path:'addMatch',component : AddMatchComponent},
  {path:'editMatch/:id',component : EditMatchComponent},
  {path:'displayMatch/:id',component : DisplayMatchComponent},
  {path:'addPlayer',component : AddPlayerComponent},
  {path:'addStadium',component : AddStadiumComponent},

  // // path not found : ** par default
  {path:'**',component : NotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
