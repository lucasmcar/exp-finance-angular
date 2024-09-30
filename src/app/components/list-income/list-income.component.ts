import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../../services/receita.service';
import { Observable, Subscription } from 'rxjs';
import { Receita } from '../../models/receita';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-income',
  templateUrl: './list-income.component.html',
  styleUrl: './list-income.component.css'
})
export class ListIncomeComponent implements OnInit{
  
  nomeUsuario: any = '';
  allIncomes: Receita[] = [];

  totalF = ''
  total: number = 0;
  receita$: Observable<number>;
  private subscription: Subscription | undefined;

  constructor(private receitaService: ReceitaService, 
    private loginService: LoginService, 
    private router: Router,
  ){
    this.receita$ = receitaService.getTotal();
    this.nomeUsuario = localStorage.getItem('nomeUsuario')
  }
  
  ngOnInit(): void {
    if(!this.loginService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    this.getAllIncome();
   
  }

  returnTotal() {
    this.receitaService.getTotal().subscribe({
      next: (response) => {
       this.total = response
       
      },
      error: (err: any) => {
        console.error('Error fetching total:', err);
      }

    });
  }


getAllIncome(){
    this.subscription = this.receitaService.getAllIncomes().subscribe({
      next : (response) =>  {
        this.allIncomes = response.map(item => {
          return {
            ...item,
            data_receita: new Date(item.data_receita) // Converte para um objeto Date
          };
        });
      }, 
      error : (err) => console.error('Not fetched items ', err)
    });
  }

  
  ngOnDestroy(): void {
    // Certifique-se de cancelar a inscrição para evitar memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  showDetails(id: number | undefined) {
    this.router.navigate(['/income-details', id ])
  }


}
