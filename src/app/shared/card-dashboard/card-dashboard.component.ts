import { Component, Input, OnInit } from '@angular/core';
import { ReceitaService } from '../../services/receita.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrl: './card-dashboard.component.css'
})


export class CardDashboardComponent implements OnInit{
  
  mostrarValores: boolean = true;
  @Input() receita:  number = 0;
  @Input() despesa: number = 0;
  @Input() data: string | undefined;

  constructor(){

  }

  ngOnInit(): void {
    this.data
    this.receita
    this.despesa;
  }

  toggleValores(): void {
    this.mostrarValores = !this.mostrarValores;
  }

}
