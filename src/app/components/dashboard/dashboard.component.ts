import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ReceitaService } from '../../services/receita.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
 
})
export class DashboardComponent implements OnInit {

  nomeUsuario: any = '';
  total: any ;
  

  constructor(private router: Router, private loginService: LoginService, private receitaService: ReceitaService){
    this.nomeUsuario = localStorage.getItem('nomeUsuario')
    this.total= 0;
  }

  ngOnInit(): void {
    if(!this.loginService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    this.returnTotal();
    
    
  }

  logout(){
    this.loginService.logout();
  }

  toOut(){}

  toIn(){}

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

}
