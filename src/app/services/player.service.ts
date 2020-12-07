import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl = "http://localhost:3001";
  constructor(private httpClient: HttpClient) { }
  getAllPlayers() {
    return this.httpClient.get<{ message: string, players: any }>(`${this.playerUrl}/allPlayers`);
  }
  deletePlayer(id: string) {
    return this.httpClient.delete(`${this.playerUrl}/deletePlayer/${id}`)
  }
  addPlayer(player: any, image: File) {
    let formData = new FormData();
    formData.append('name', player.name);
    formData.append('date', player.date);
    formData.append('image', image);

    return this.httpClient.post(`${this.playerUrl}/addPlayer`, formData);
  }
}
