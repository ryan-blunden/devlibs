import { Component, OnInit } from '@angular/core';
import { SentenceService } from '../sentence.service';

@Component({
  selector: 'dl-sentence-component',
  templateUrl: './sentence-component.component.html',
  styleUrls: ['./sentence-component.component.css']
})
export class SentenceComponentComponent implements OnInit {
  sentences = [];

  constructor(private sentenceService: SentenceService) {
  }

  ngOnInit() {
    this.sentenceService.getSentences()
      .subscribe(response => this.sentences = response);
  }
}
