import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  slides: string[] = [
    'assets/snow_structure.jpg',
    'assets/paper_art.jpg',
    'assets/alps_lake.jpg',
    'assets/beach_bridge.jpg',
    'assets/dragon_boat.jpg',
  ]

  language: string;

  constructor(private languageService: LanguageService) {
    this.language = this.languageService.language;
   }

  ngOnInit() {
  }

}
