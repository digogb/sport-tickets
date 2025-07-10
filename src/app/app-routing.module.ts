import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AthleteRegistrationComponent } from './components/athlete-registration/athlete-registration.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'athlete-registration', component: AthleteRegistrationComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }