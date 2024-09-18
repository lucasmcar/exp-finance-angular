import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Despesa } from '../models/despesa';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  private apiUrl = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  getTotal() : Observable<number>{
    const token = localStorage.getItem('token'); // Obtém o token salvo no localStorage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Adiciona o token no cabeçalho
    });
  
    return this.http.get<number>(`${this.apiUrl}/despesa/total`, { headers });
  }

  salvaDespesa(despesa: Despesa){
    return this.http.post<Despesa>(`${this.apiUrl}/despesa/salvar`, despesa);
  }
}
