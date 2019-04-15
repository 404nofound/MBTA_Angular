import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {

  alertList : Array<any>;

  constructor( private http: HttpClient ) {

      this.alertList = [];

      const url = 'https://api-v3.mbta.com/alerts?filter[route_type]=0,1&filter[datetime]=NOW';

      this.http.get(url)
      .subscribe(data => {
          for (var i = 0; i < data['data'].length; i++) {
              let obj = {
                  cause : data['data'][i]['attributes']['cause'],
                  effect : data['data'][i]['attributes']['effect'],
                  info : data['data'][i]['attributes']['header'],
                  desc : data['data'][i]['attributes']['description'],
                  update : data['data'][i]['attributes']['updated_at'].substring(0,19).replace(/T/,' ')
              }
              this.alertList.push(obj);
          }

      }, err => {
          console.error('ERROR', err);
      });
  }

  ngOnInit() {
  }

}
