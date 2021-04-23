import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SmallButtonComponent } from './small-button/small-button.component';
import { MediumButtonComponent } from './medium-button/medium-button.component';
import { LargeButtonComponent } from './large-button/large-button.component';
import { NumberBoxComponent } from './number-box/number-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallButtonComponent,
    MediumButtonComponent,
    LargeButtonComponent,
    NumberBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
