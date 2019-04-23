import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { InputUserDataComponent } from './input-user-data/input-user-data.component';
import { NgModule } from '@angular/core';

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
