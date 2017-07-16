import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

@Injectable()
export class SentenceService {

  constructor(private http: Http) { }

  getSentences() {
    return this.http.get('http://localhost:8080/api/v1/libs/')
      .map(response => response.json())
      .map(sentences => this.transformSentences(sentences));
  }

  getSentence(id: string) {
    return this.getSentences().map(sentences => {
      for (let sentence of sentences) {
        if (sentence.id === id) {
          return sentence;
        }
      }
      return null;
    });
  }

  transformSentences(originalSentences) {
    return originalSentences.map(sentence => {
      sentence.words = sentence.text
        .match(/{{.+?}}/g)
        .map(word => word.replace(/[{}]/g, ''));

      return sentence;
    });
  }

  interpolate(sentence, queryParams) {
    for (let key in queryParams) {
      sentence.text = sentence.text.replace(/{{.+?}}/, queryParams[key]);
    }

    return sentence;
  }
}
