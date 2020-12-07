import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() x:any;
  constructor() { }

  ngOnInit(): void {
  }
  result(a,b){
    if (a>b) {
      return['Win','aqua']
    }else if (a==b) {
      return['Draw','blue']
    }else{
      return['Loss','yellow']
    }
  }
}
