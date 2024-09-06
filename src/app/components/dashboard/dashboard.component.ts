import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ReceitaService } from '../../services/receita.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
 
})
export class DashboardComponent implements OnInit {

  nomeUsuario: any = '';
  totalReceitas: number | null = null;

  constructor(private router: Router, private loginService: LoginService, private receitaService: ReceitaService){
    this.nomeUsuario = localStorage.getItem('nomeUsuario')
  }

  ngOnInit(): void {
    if(!this.loginService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    this.totalReceitas = this.returnTotal();
    console.log(this.totalReceitas)
  }

  logout(){
    this.loginService.logout();
  }

  toOut(){}

  toIn(){}

  returnTotal() : any{
    this.receitaService.getTotal().subscribe({
      next: (response: { total: number; }) => {

        return response.total;
      },
      error: (err: any) => {
        console.error('Error fetching total:', err);
      }
    });
  }

}
