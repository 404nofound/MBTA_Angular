import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { StopsComponent } from './stops/stops.component';
import { PredictionComponent } from './prediction/prediction.component';
import { AlertComponent } from './alert/alert.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
    {path: '', redirectTo: '/location', pathMatch: 'full'},
    {path: 'location', component: LocationComponent},
    {path: 'stops', component: StopsComponent},
    {path: 'prediction', component: PredictionComponent},
    {path: 'alert', component: AlertComponent},
    {path: 'feedback', component: FeedbackComponent},
    {path: 'help', component: HelpComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
