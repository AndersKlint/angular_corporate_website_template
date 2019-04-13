import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.sass']
})
export class PieChartComponent implements OnInit {

  public chartType: string = 'pie';
  public chartDatasets: Array<any> = [
    { data: [300, 50, 100, 40, 120], label: 'Peoples fav color' }
  ];
  public chartLabels: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];
  public chartColors: Array<any> = [
    {
      // Use this tool to pick colours: https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=2196F3
      backgroundColor: ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5'],
      hoverBackgroundColor: ['#1565c0', '#1565c0', '#1565c0', '#1565c0', '#1565c0'],
      borderWidth: 2,
    }
  ];
  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  constructor() { }

  ngOnInit() {
  }

}
