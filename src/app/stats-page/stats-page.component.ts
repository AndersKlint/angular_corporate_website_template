import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent implements OnInit {

  slides: string[] = [
    'assets/beach_bridge.jpg',
    'assets/alps_lake.jpg',
    'assets/dragon_boat.jpg',
    'assets/paper_art.jpg',
    'assets/snow_structure.jpg',
  ];

  language: string;

  constructor(private languageService: LanguageService) {
    this.language = this.languageService.language;
   }

  ngOnInit() {
  }

}
