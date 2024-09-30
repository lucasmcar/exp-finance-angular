import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../../services/receita.service';
import { Observable } from 'rxjs';
import { Receita } from '../../models/receita';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrl: './income-details.component.css'
})
export class IncomeDetailsComponent implements OnInit {

  nomeUsuario: any = '';
  receita$: Observable<number>;
  details: Receita | undefined;
  receitaId: number | undefined;
  details$: Observable<Receita> | undefined;

  constructor(private receitaService: ReceitaService, private route: ActivatedRoute,){
    this.nomeUsuario = localStorage.getItem('nomeUsuario')
    this.receita$ = receitaService.getTotal();
    
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.receitaId = +params['id']; // + converte para número
      this.getDetails();
    });
    
  }

  

  getDetails(){
    if (this.receitaId) {
      this.receitaService.getDetails(this.receitaId).subscribe({
        next: (response) => {
          this.details = response;
          
        },
        error: (err) => {
          console.error('Error loading receita details', err);
        }
      });
  }
  }
}
