import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularStarterLibModule } from 'angular-starter-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularStarterLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
