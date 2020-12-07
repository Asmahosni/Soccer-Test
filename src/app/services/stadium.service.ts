import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {
  stadiumUrl = "http://localhost:3001";
  constructor(private httpClient : HttpClient) { }
  getAllStadiums(){
    return this.httpClient.get<{message : string ,stadiums : any}>(`${this.stadiumUrl}/allStadiums`);
  }
 addStadium(stadium : any) {
    return this.httpClient.post(`${this.stadiumUrl}/addStadium`,stadium);
  }

  getStadiumById(id:string){
    return this.httpClient.get<{stadium : any}>(`${this.stadiumUrl}/getStadium/${id}`);
  }
  deleteStadium(id : string){
    return this.httpClient.delete(`${this.stadiumUrl}/deleteStadium/${id}`);
  }
}
