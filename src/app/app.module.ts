import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputUserDataComponent } from './input-user-data/input-user-data.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';

@NgModule({
  declarations: [
    AppComponent,
    InputUserDataComponent,
    DisplayUserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
