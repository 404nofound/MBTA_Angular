import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NearbyStopService {

  constructor( private http: HttpClient ) { }

  getNearbyStop(lat: string, log: string): Array<any> {
      let list = [];
      const url = 'https://api-v3.mbta.com/stops?include=parent_station&filter[route_type]=0,1&filter[latitude]=' + lat + '&filter[longitude]=' + log + '&filter[radius]=0.01';
      //console.log(url)
      this.http.get(url)
      .subscribe(data => {
          for (var i = 0; i < data['included'].length; i++) {
              let obj = {
                  name : data['included'][i]['attributes']['name'],
                  id : data['included'][i]['id'],
                  latitude: data['included'][i]['attributes']['latitude'],
                  longitude: data['included'][i]['attributes']['longitude']
              }
              list.push(obj);
          }
          window.localStorage.setItem("nearby", JSON.stringify(list));
      }, err => {
          console.error('ERROR', err);
      });
      return list;
  }
}
