import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  language: string;

  constructor(private languageService: LanguageService) {
    this.language = this.languageService.language;
    console.log(this.language);
   }


  ngOnInit() {
  }

}
