import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TherapistComponent } from './components/therapist/therapist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'user/:userId', component: UsersUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
