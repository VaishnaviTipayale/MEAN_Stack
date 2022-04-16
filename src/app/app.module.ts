import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VaishnaviComponent } from './vaishnavi/vaishnavi.component';

@NgModule({
  declarations: [
    AppComponent,
    VaishnaviComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
