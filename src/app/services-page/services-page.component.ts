import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

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
