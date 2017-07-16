import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentenceComponent } from './sentence/sentence.component';

const routes: Routes = [
  { path: '', component: SentenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class DevLibsRoutingModule { }
