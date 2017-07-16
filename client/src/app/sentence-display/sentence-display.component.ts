import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SentenceService } from '../sentence.service';

@Component({
  selector: 'dl-sentence-display',
  templateUrl: './sentence-display.component.html',
  styleUrls: ['./sentence-display.component.css']
})
export class SentenceDisplayComponent implements OnInit {
  sentence: any;

  constructor(private route: ActivatedRoute,
              private sentenceService: SentenceService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.route.params.subscribe(params => {
        this.sentenceService
          .getSentence(params['id'])
          .subscribe(sentence => {
            this.sentence = this.sentenceService
              .interpolate(sentence, queryParams);
          });
      });
    });
  }
}
