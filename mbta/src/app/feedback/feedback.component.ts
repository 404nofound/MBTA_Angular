import { Component, OnInit } from '@angular/core';
import { SubmitFeedbackService } from "../services/submit-feedback.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  name: any;
  email: any;
  title: any;
  suggestion: any;

  constructor( private submitFeedbackService: SubmitFeedbackService ) {
      this.name = '';
      this.email = '';
      this.title = '';
      this.suggestion = '';
  }

  ngOnInit() {
  }

  submit() {
      if (this.suggestion != null && this.suggestion.replace(/ /, '') != '') {
          this.submitFeedbackService.submit(this.name, this.email, this.title, this.suggestion);
          alert("Success! Thank You!");
      } else if (this.suggestion == '') {
          alert("Suggestion cannot be empty!");
          //console.log("Suggestion cannot be empty!");
      }
  }
}
