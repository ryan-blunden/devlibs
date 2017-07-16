import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentenceComponent } from './sentence/sentence.component';
import { SentenceFormComponent } from './sentence-form/sentence-form.component';

const routes: Routes = [
  { path: '', component: SentenceComponent },
  { path: ':id/form', component: SentenceFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class DevLibsRoutingModule { }
