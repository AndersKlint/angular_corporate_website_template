import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-page',
  templateUrl: './why-page.component.html',
  styleUrls: ['./why-page.component.scss']
})
export class WhyPageComponent implements OnInit {

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
