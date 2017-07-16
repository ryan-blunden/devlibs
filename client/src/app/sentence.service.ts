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
    let sentences = [];

    for (let sentence of originalSentences) {
      sentence.words = sentence.text.match(/{{.+?}}/g);
      sentence.words = sentence.words.map(function(word) {
        return word.replace(/[{}]/g, '');
      });
      sentences.push(sentence);
    }

    return sentences;
  }
}
