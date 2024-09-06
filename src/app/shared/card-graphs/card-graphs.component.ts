import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-graphs',
  templateUrl: './card-graphs.component.html',
  styleUrl: './card-graphs.component.css'
})
export class CardGraphsComponent implements OnInit {
  
  chartOptions: any;
  ngOnInit(): void {

    this.chartOptions = {
      title: {
        text: 'Gráfico de Exemplo'
      },
      tooltip: {},
      xAxis: {
        data: ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4']
      },
      yAxis: {},
      series: [{
        name: 'Vendas',
        type: 'bar',
        data: [5, 20, 36, 10]
      }]
    };
  }
}




