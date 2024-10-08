import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ReceitaService } from '../../services/receita.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DespesaService } from '../../services/despesa.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
 
})
export class DashboardComponent implements OnInit {

  nomeUsuario: any = '';
  total: number = 0;
  totalDespesa: number = 0;
  data: string | undefined;
  totalFormatted = ''
 

  constructor(
    private router: Router, 
    private loginService: LoginService, 
    private receitaService: ReceitaService,
    private despesaService: DespesaService
  ){
    this.nomeUsuario = localStorage.getItem('nomeUsuario')
    this.data = new Date().toLocaleDateString('pt-br', {year: "numeric", day: "2-digit", month: "2-digit"});
  }

  ngOnInit(): void {
  
    if(!this.loginService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
   this.receitaService.getTotal();
   this.despesaService.getTotal();
   this.returnTotal();
   this.returnTotalDespesa();

  }

  logout(){
    this.loginService.logout();
  }

  toOut(){}

  toIn(){}

  returnTotal() {
    this.receitaService.getTotal().subscribe({
      next: (response) => {
       this.total = response;

       this.totalFormatted = this.total.toLocaleString('pt-br', {
        style: 'decimal', minimumFractionDigits: 2
      });

      console.log(this.totalFormatted)
       
      },
      error: (err: any) => {
        console.error('Error fetching total:', err);
      }

    });
  }

  returnTotalDespesa(){
    this.despesaService.getTotal().subscribe({
      next: (response) => {
        this.totalDespesa = response;
      },
      error: (error: any) =>{
        console.error("Error fetching total", error);
      }
    })
  }

}
