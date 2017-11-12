import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { DataService } from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
