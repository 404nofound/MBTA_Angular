import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NearbyStopService } from "../services/nearby-stop.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})

export class LocationComponent implements OnInit {

  latitude: string;
  longitude: string;

  stoplat: string;
  stoplog: string;

  zoom: number = 15;
  stopList: Array<any>;

  constructor( private nearbyStopService: NearbyStopService ) {

      let key = JSON.parse(window.localStorage.getItem("direction"));
      if (key == null) {
          let directionList = [];

          let train = ["red", "mattapan", "orange", "greenb", "greenc", "greend", "greene", "blue"];

          let direction0 = ["ALEWIFE - BRAINTREE", "ASHMONT - MATTAPAN", "OAK GROVE - FORSET HILLS",
            "Park St - BOSTON COLLEGE", "NORTH STATION - CLEVELAND CIRCLE", "PARK St - RIVERSIDE",
            "LECHMERE - HEATH", "BOWDOIN - WONDERLAND"];

          let direction1 = ["BRAINTREE - ALEWIFE", "MATTAPAN - ASHMONT", "FORSET HILLS - OAK GROVE",
            "BOSTON COLLEGE - Park St", "CLEVELAND CIRCLE - NORTH STATION", "RIVERSIDE - PARK St",
            "HEATH - LECHMERE", "WONDERLAND - BOWDOIN"];

          for (let i = 0; i < 8; i++) {
              let obj = {
                  train : train[i],
                  0 : direction0[i],
                  1 : direction1[i]
              }
              directionList.push(obj);
          }
          window.localStorage.setItem("direction", JSON.stringify(directionList));
      }

      this.stopList = [];

      var lat;
      var log;

      navigator.geolocation.getCurrentPosition((position) => {
          lat = position.coords.latitude;
          log = position.coords.longitude;

          //console.log(lat,log);
          this.stoplat = this.latitude = lat;
          this.stoplog = this.longitude = log;

          this.stopList = this.nearbyStopService.getNearbyStop(lat, log);
      });
  }

  ngOnInit() {
  }

  clickStop(latitude: string, longitude: string): void {
      this.stoplat = latitude;
      this.stoplog = longitude;
  }

  click(): void {
      this.stoplat = this.latitude;
      this.stoplog = this.longitude;
  }
}
