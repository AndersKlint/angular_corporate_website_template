import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-why-page',
  templateUrl: './why-page.component.html',
  styleUrls: ['./why-page.component.scss']
})
export class WhyPageComponent implements OnInit {

  slides: string[] = [
    'assets/dragon_boat.jpg',
    'assets/alps_lake.jpg',
    'assets/beach_bridge.jpg',
    'assets/paper_art.jpg',
    'assets/snow_structure.jpg',
  ]

  language: string;

  constructor(private languageService: LanguageService) {
    this.language = this.languageService.language;
   }


  ngOnInit() {
  }

}
