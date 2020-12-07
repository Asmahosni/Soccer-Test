import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let players = [
    {id:1 ,name: "Name 1", date:"15/12/1980",image:"assets/images/img_1.jpg"},
    {id:2 ,name: "Name 2", date:"17/10/1980" ,image:"assets/images/img_2.jpg"},
    {id:3 ,name: "Name 3", date:"15/03/1980" ,image:"assets/images/img_2.jpg"},
    {id:4 ,name: "Name 4", date:"15/04/1980" ,image:"assets/images/img_2.jpg"},
    {id:5 ,name: "Name 5", date:"15/12/1980" ,image:"assets/images/img_2.jpg"},
    {id:6 ,name: "Name 6", date:"15/12/1980" ,image:"assets/images/img_2.jpg"},
    {id:7 ,name: "Name 7", date:"15/12/1980" ,image:"assets/images/img_2.jpg"},
    {id:8 ,name: "Name 8", date:"15/12/1980" ,image:"assets/images/img_2.jpg"}
  ]
  let matches = [
    {id:1 ,scoreOne : 2, scoreTwo : 5, teamOne : 'FCB', teamTwo : 'RMD' },
    {id:2 ,scoreOne : 2, scoreTwo : 2, teamOne : 'EST', teamTwo : 'CA' },
    {id:3 ,scoreOne : 0, scoreTwo : 4, teamOne : 'ESS', teamTwo : 'CSS' }
  ]

   return {players,matches};

  }
}