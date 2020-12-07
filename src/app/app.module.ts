import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { InfoComponent } from './components/info/info.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { WorldCupComponent } from './components/world-cup/world-cup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AdminComponent } from './components/admin/admin.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { SearchComponent } from './components/search/search.component';
import { StadiumComponent } from './components/stadium/stadium.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServiceComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    ScoreComponent,
    NewsComponent,
    InfoComponent,
    VideosComponent,
    BlogComponent,
    WorldCupComponent,
    MatchesComponent,
    AdminComponent,
    PlayersComponent,
    PlayerComponent,
    AddMatchComponent,
    AddPlayerComponent,
    EditMatchComponent,
    DisplayMatchComponent,
    EditPlayerComponent,
    SearchComponent,
    StadiumComponent,
    AddStadiumComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    // InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } class AppBootstrapModule {}
