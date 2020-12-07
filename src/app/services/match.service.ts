import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // matchUrl='api/matches' : base de données fake
  matchUrl = "http://localhost:3001"
  constructor(private httpClient:HttpClient) { }
  getAllMatches(){
    return this.httpClient.get<{message : string ,matches : any}>(`${this.matchUrl}/allMatches`);
  }
  // deleteMatch(id : number){
  //   return this.httpClient.delete(`${this.matchUrl}/${id}`);
  // }
  deleteMatch(id : string){
    return this.httpClient.delete(`${this.matchUrl}/deleteMatch/${id}`);
  }
  addMatch(match : any,image : File) {
    // return this.httpClient.post(`${this.matchUrl}`,match);
    let formData = new FormData();
    formData.append('teamOne', match.teamOne);
    formData.append('teamTwo', match.teamTwo);
    formData.append('scoreOne', match.scoreOne);
    formData.append('scoreTwo', match.scoreTwo);
    formData.append('image', image);


    return this.httpClient.post(`${this.matchUrl}/addMatch`,formData);
  }
  editMatch(match : any){
    return this.httpClient.put(`${this.matchUrl}/editMatch/${match._id}`,match);
  }
  getMatchById(id:string){
    return this.httpClient.get<{match : any}>(`${this.matchUrl}/displayMatch/${id}`);
  }
  searchMatch(term : any){
    return this.httpClient.get<{searchedMatches:any}>(`${this.matchUrl}/api/search/${term}`)
  }
}