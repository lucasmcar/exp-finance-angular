import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receita } from '../models/receita';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private apiUrl = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }


  getTotal() : any{
    return this.http.get<number>(`${this.apiUrl}/receita/total`)
  }

  salvarReceita(receita: Receita){
    return this.http.post<Receita>(`${this.apiUrl}/receita/salvar`, receita)
  }
}
