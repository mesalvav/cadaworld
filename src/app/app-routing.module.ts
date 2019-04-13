import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularComponent } from './components/popular/popular.component';

const routes: Routes = [
  { path: '', redirectTo: 'populars', pathMatch: 'full' },
  { path: 'populars', component: PopularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
