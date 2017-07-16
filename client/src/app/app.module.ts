import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DevLibsRoutingModule } from './app-routing.module';
import { SentenceService } from './sentence.service';
import { SentenceComponent } from './sentence/sentence.component';
import { SentenceFormComponent } from './sentence-form/sentence-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SentenceComponent,
    SentenceFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DevLibsRoutingModule
  ],
  providers: [SentenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
