import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receita } from '../models/receita';
import { finalize, Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from '../shared/dialogs/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private apiUrl = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient, private dialog: MatDialog) { }


  getTotal() : Observable<number>{
    
    const token = localStorage.getItem('token'); // Obtém o token salvo no localStorage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Adiciona o token no cabeçalho
    });
  
    return this.http.get<number>(`${this.apiUrl}/receita/total`, { headers });
  }

  getReceitasUltimosTresMeses(): any {
    const token = localStorage.getItem('token'); // Obtém o token salvo no localStorage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Adiciona o token no cabeçalho
    });
  
    return this.http.get<any[]>(`${this.apiUrl}/receita/ultimos-tres-meses`, { headers });
  }

  getAllIncomes(): Observable<Receita[]>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}` 
    });

    return this.http.get<Receita[]>(`${this.apiUrl}/receitas`, {headers})
  }

  salvarReceita(receita: Receita){
     // Abre o spinner de carregamento
     const dialogRef = this.dialog.open(LoadingComponent, {
      data: {
        text: 'Salvando receita'   
      },
      disableClose: true  // Evita que o usuário feche o diálogo manualmente
    });
    return this.http.post<Receita>(`${this.apiUrl}/receita/salvar`, receita).pipe(
      finalize(() =>{
        dialogRef.close()
      })
    );
  }
}
