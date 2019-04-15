import { Component, OnInit } from '@angular/core';
import { SearchPredictionService } from "../services/search-prediction.service";
import { StopDataService } from "../services/stop-data.service";

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  nearby: Array<any>;
  stop: Array<any>;
  prediction: Array<any>;

  constructor( private searchPredictionService: SearchPredictionService, private stopDataService: StopDataService) {
      let key = JSON.parse(window.localStorage.getItem("nearby"));
      if (key != null) {
          this.nearby = key;
      }

      this.prediction = [];
      this.stop = [];

      this.prediction = this.searchPredictionService.search(this.nearby[0]['id']);

      this.stop = this.stopDataService.getData('red');
  }

  ngOnInit() {
  }

  getChangeNearby(stop: string) {
      this.prediction = [];
      this.prediction = this.searchPredictionService.search(stop);
  }

  getChangeTrain(train: string) {
      this.stop = [];
      this.stop = this.stopDataService.getData(train);
  }

  getChange(stop: string) {
      this.prediction = [];
      this.prediction = this.searchPredictionService.search(stop);
  }
}
