import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

  slides: string[] = [
    'assets/paper_art.jpg',
    'assets/alps_lake.jpg',
    'assets/beach_bridge.jpg',
    'assets/dragon_boat.jpg',
    'assets/snow_structure.jpg',
  ]

  language: string;

  constructor(private languageService: LanguageService) {
    this.language = this.languageService.language;
   }

  ngOnInit() {
  }

}
