import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { StopsComponent } from './stops/stops.component';
import { PredictionComponent } from './prediction/prediction.component';
import { AppRoutingModule } from './app-routing.module';
import { AlertComponent } from './alert/alert.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HelpComponent } from './help/help.component';
import {HashLocationStrategy , LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    StopsComponent,
    PredictionComponent,
    AlertComponent,
    FeedbackComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEtfo79T22AAqtESXOzI6tDJIcsiWHMAI'
  }),
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
