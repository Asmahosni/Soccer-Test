import { Component } from '@angular/core';
//decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  min(T){
    let min=T[0];
    for (let i = 1; i < T.length; i++) {
      if (T[i]<min) {
        min = T[i];
      }
      
    }
    return min;
  }
  nbrChar(T){
    let Table = Array() ;
    for (let i = 0; i < T.length; i++) {
      let ch = T[i] +  ' : ' + T[i].length ;
      Table.push(ch);
    }
    return Table;
  }
}
