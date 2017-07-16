import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SentenceService } from './sentence.service';
import { SentenceComponent } from './sentence/sentence.component';

@NgModule({
  declarations: [
    AppComponent,
    SentenceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SentenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
