import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receita } from '../models/receita';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private apiUrl = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }


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

  salvarReceita(receita: Receita){
    return this.http.post<Receita>(`${this.apiUrl}/receita/salvar`, receita)
  }
}
