import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  languages: string[] = ['en', 'ja']

  language: string = this.languages[1];

  constructor() { }
}
