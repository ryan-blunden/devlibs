import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SentenceService } from '../sentence.service';

@Component({
  selector: 'dl-sentence-form',
  templateUrl: './sentence-form.component.html',
  styleUrls: ['./sentence-form.component.css']
})
export class SentenceFormComponent implements OnInit {
  sentence: any;

  constructor(private route: ActivatedRoute,
              private sentenceService: SentenceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sentenceService
        .getSentence(params['id'])
        .subscribe(sentence => this.sentence = sentence);
    });
  }

  submit(e) {
    e.preventDefault();
    console.log('submit');
  }
}
