import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SentenceService } from '../sentence.service';

@Component({
  selector: 'dl-sentence-form',
  templateUrl: './sentence-form.component.html',
  styleUrls: ['./sentence-form.component.css']
})
export class SentenceFormComponent implements OnInit {
  sentence: any;
  model = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sentenceService: SentenceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sentenceService
        .getSentence(params['id'])
        .subscribe(sentence => this.sentence = sentence);
    });
  }

  onSubmit(sentenceForm, event) {
    console.log(sentenceForm);
    event.preventDefault();
    /*
    this.router.navigate([this.sentence.id], {
      queryParams: {
        lang: 'PHP'
      }
    });
    */
  }
}
