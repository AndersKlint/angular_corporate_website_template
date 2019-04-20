import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  slides: string[] = [
    'assets/alps_lake.jpg',
    'assets/beach_bridge.jpg',
    'assets/dragon_boat.jpg',
    'assets/paper_art.jpg',
    'assets/snow_structure.jpg',
  ]

  constructor() { }

  ngOnInit() {
  }

}
