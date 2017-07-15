import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SentenceService } from './sentence.service';
import { SentenceComponentComponent } from './sentence-component/sentence-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SentenceComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SentenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
