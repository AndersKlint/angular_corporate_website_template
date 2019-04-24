import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  languages: string[] = ['en', 'ja']

  language: string;

  constructor() { 
    var storedLang;
    storedLang = localStorage.getItem('language');
    if(!storedLang)
      this.language = this.languages[0];
    else
    this.language = storedLang;
  }

  public changeLanguage(newLang: string) {
    localStorage.setItem('language', newLang);
    window.location.reload();
  }
}
