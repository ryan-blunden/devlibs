import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SentenceService {

  constructor(private http: Http) { }

  getSentences() {
    return this.http.get('http://localhost:8080/api/v1/libs/')
      .map(response => response.json())
      .map(response => this.transformSentences(response));
  }

  transformSentences(originalSentences) {
    let sentences = [];

    for (let sentence of originalSentences) {
      sentence.words = sentence.text.match(/{{.+?}}/g);
      sentences.push(sentence);
    }

    return sentences;
  }
}
