import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StopDataService {

  constructor( private http: HttpClient ) { }

  public getData(train: string): Array<any> {
      let stop = [];

      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              'Access-Control-Allow-Origin' : '*'
          })
      };

      let params = new URLSearchParams();
      params.append("train", train);
      let body = params.toString();

      this.http.post('https://www.yichangshao.com/mbta_angular/connect.php', body, httpOptions)
      .subscribe(data => {
          for (var i in data) {
              let obj = {
                  id : data[i]['id'],
                  address : data[i]['address'],
                  name : data[i]['name'],
                  lat: parseFloat(data[i]['lat']),
                  log: parseFloat(data[i]['log']),
                  wheel: this.checkWheel(data[i]['wheel'])
              };
              stop.push(obj);
          }
          //console.log(this.stop);
      }), error => {
          console.log(error);
      };
      return stop;
  }

  public checkWheel(wheel: any): string {
      if (wheel == 0 || wheel == 2) {
          return 'inwheel';
      } else {
          return 'acwheel';
      }
  }
}
