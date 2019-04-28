import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  language: string;

  constructor(private languageService: LanguageService) {
    this.language = this.languageService.language;
   }


  ngOnInit() {
  }

}
