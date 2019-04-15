import { Component, OnInit } from '@angular/core';
import { StopDataService } from "../services/stop-data.service";

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})

export class StopsComponent implements OnInit {

  stopList: Array<any>;
  name: string;

  constructor( private stopDataService: StopDataService ) {
      this.name = 'red';

      this.stopList = [];
      this.stopList = this.stopDataService.getData('red');
  }

  ngOnInit() {
  }

  getChange(train: string) {
      this.name = train;
      this.stopList = [];
      this.stopList = this.stopDataService.getData(train);
  }
}
