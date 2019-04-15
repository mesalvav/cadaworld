import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularComponent } from './components/popular/popular.component';
import { FilledformComponent } from './components/filledform/filledform.component';
import { PostresultsComponent } from './components/postresults/postresults.component';

const routes: Routes = [
  { path: '', redirectTo: 'populars', pathMatch: 'full' },
  { path: 'populars', component: PopularComponent},
  { path: 'filledform', component: FilledformComponent},
  { path: 'postresults', component: PostresultsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
