import { Component, OnInit } from '@angular/core';
import { SentenceService } from '../sentence.service';

@Component({
  selector: 'dl-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {
  sentences = [];

  constructor(private sentenceService: SentenceService) { }

  ngOnInit() {
    this.sentenceService.getSentences()
      .subscribe(response => this.sentences = response);
  }

}
