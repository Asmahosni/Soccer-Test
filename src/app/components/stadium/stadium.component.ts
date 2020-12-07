import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent implements OnInit {
  @Input()  s : any ;
  @Output() newStadiums : EventEmitter<any> = new EventEmitter();
  constructor(private stadiumService : StadiumService) { }

  ngOnInit(): void {
  }
  delete(id : string){
    this.stadiumService.deleteStadium(id).subscribe(
      () => {
        console.log('stadium added successfully');
        this.stadiumService.getAllStadiums().subscribe(
          data => {
            this.newStadiums.emit(data.stadiums);
          }
        )
      }
    )
  }
}
