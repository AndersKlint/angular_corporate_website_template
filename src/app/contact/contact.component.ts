import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  language: string;

  constructor(private languageService: LanguageService) {
    this.language = this.languageService.language;
   }

  ngOnInit() {
  }

}
