import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubmitFeedbackService {

  constructor( private http: HttpClient ) { }

  public submit(name: any, email: any, title: any, suggestion: any): void {

      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              'Access-Control-Allow-Origin' : '*'
          })
      };

      let params = new URLSearchParams();
      params.append("name", name);
      params.append("email", email);
      params.append("title", title);
      params.append("suggestion", suggestion);
      let body = params.toString();

      this.http.post('https://www.yichangshao.com/mbta_angular/feedback.php', body, httpOptions)
      .subscribe(data => {
      }), error => {
      };
  }
}
