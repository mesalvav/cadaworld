import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularComponent } from './components/popular/popular.component';
import { FilledformComponent } from './components/filledform/filledform.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularComponent,
    FilledformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
