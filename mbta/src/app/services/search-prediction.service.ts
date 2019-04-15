import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchPredictionService {

  constructor( private http: HttpClient ) { }

  public search(stop: string): Array<any> {

      let prediction = [];

      const url = 'https://api-v3.mbta.com/predictions?filter[route]=Blue,Orange,Red,Mattapan,Green-B,Green-C,Green-D,Green-E&filter[stop]=' + stop;
      //console.log(url)
      this.http.get(url)
      .subscribe(data => {
          for (var i = 0; i < data['data'].length; i++) {
              let arr: string;
              let dep: string;
              let info: string;
              let icon: string;
              let directions : string;
              //let detail : string;

              let arrival_time = data['data'][i]['attributes']['arrival_time'];
              let departure_time = data['data'][i]['attributes']['departure_time'];
              let direction_id = data['data'][i]['attributes']['direction_id'];
              let status = data['data'][i]['attributes']['status'];
              let name = data['data'][i]['relationships']['route']['data']['id'];

              let id = data['data'][i]['id'].replace(/:/, '');

              if (arrival_time != null || departure_time != null || status != null) {
                  if (arrival_time == null && departure_time == null) {
                      info = status;
                      arr = "There is no arrival time information.";
                      dep = "There is no departure time information.";
                      //detail = info;
                  } else if (arrival_time == null && departure_time != null) {
                      let now = new Date();
                      departure_time = departure_time.substring(0,19).replace(/T/,' ');
                      arr = "There is no arrival time information.";
                      dep = "Departure Time: " + departure_time;
                      //detail = "Departure Time: " + departure_time;
                      let time = new Date(departure_time);
                      info = ((time.getTime() - now.getTime())/60000).toString();
                  } else {
                      let now = new Date();
                      arrival_time = arrival_time.substring(0,19).replace(/T/,' ');
                      //detail = "Arrival Time: " + arrival_time;
                      arr = "Arrival Time: " + arrival_time;

                      if (departure_time != null) {
                          //departure_time = "Departure Time: " + departure_time.substring(0,19).replace(/T/,' ');
                          dep = "Departure Time: " + departure_time.substring(0,19).replace(/T/,' ');
                          //detail += departure_time;
                      } else {
                          dep = "There is no departure time information.";
                      }
                      let time = new Date(arrival_time);
                      info = ((time.getTime() - now.getTime())/60000).toString();
                  }

                  let key = JSON.parse(window.localStorage.getItem("direction"));

                  if (name[0] == 'R') {
                      icon = 'red';
                      directions = key[0][direction_id];
                  } else if (name[0] == 'O') {
                      icon = 'orange';
                      directions = key[2][direction_id];
                  } else if (name[0] == 'B') {
                      icon = 'blue';
                      directions = key[7][direction_id];
                  } else if (name[0] == 'M') {
                      icon = 'mattapan';
                      directions = key[1][direction_id];
                  } else if (name[name.length-1] == 'B') {
                      icon = 'greenb';
                      directions = key[3][direction_id];
                  } else if (name[name.length-1] == 'C') {
                      icon = 'greenc';
                      directions = key[4][direction_id];
                  } else if (name[name.length-1] == 'D') {
                      icon = 'greend';
                      directions = key[5][direction_id];
                  } else if (name[name.length-1] == 'E') {
                      icon = 'greene';
                      directions = key[6][direction_id];
                  }

                  if (parseInt(info) == 0) {
                      info = 'Less than 1';
                  } else {
                      let temp = parseInt(info);
                      info = temp.toString();
                  }

                  let obj = {
                      id : id,
                      info : info + ' Min',
                      direction : directions,
                      name : name,
                      icon : icon,
                      arr : arr,
                      dep : dep
                      //detail : detail
                  };
                  prediction.push(obj);
              } else {
                  continue;
              }
          }
          //console.log(this.prediction);
      }, err => {
          console.error('ERROR', err);
      });
      return prediction;
  }
}
