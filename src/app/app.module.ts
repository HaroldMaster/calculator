import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediumButtonComponent } from './medium-button/medium-button.component';
import { NumberBoxComponent } from './number-box/number-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MediumButtonComponent,
    NumberBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
