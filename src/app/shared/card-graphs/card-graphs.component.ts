import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../../services/receita.service';

@Component({
  selector: 'app-card-graphs',
  templateUrl: './card-graphs.component.html',
  styleUrl: './card-graphs.component.css'
})
export class CardGraphsComponent implements OnInit {
  
  chartOptions: any;
  receitaData: any[] = [];
  graph: any;

  constructor(private receitaService: ReceitaService){}
  ngOnInit(): void {
    this.returnReceitasUltimosTresMeses();
   
  }




  returnReceitasUltimosTresMeses() {
    this.receitaService.getReceitasUltimosTresMeses().subscribe({
      next: (response: any[]) => {
        this.receitaData = response.map(item => item.total);  // Mapeia os totais das receitas
        const meses = response.map(item => this.getNomeMes(item.mes)); // Mapeia os meses

        this.chartOptions = {
          title: {
            text: 'Receitas dos Últimos 3 Meses'
          },
          tooltip: {},
          xAxis: {
            data: meses
          },
          yAxis: {},
          series: [{
            name: 'Receitas',
            type: 'bar',
            data: this.receitaData
          }]
        };
      },
      error: (err: any) => {
        console.error('Error fetching receitas:', err);
      }
    });
  }

  // Função para converter o número do mês em nome do mês
  getNomeMes(numeroMes: number): string {
    const data = new Date();
    data.setMonth(numeroMes - 1);  // Como os meses em JavaScript são de 0 a 11, subtraímos 1
    return data.toLocaleString('pt-BR', { month: 'long' });
  }
}




