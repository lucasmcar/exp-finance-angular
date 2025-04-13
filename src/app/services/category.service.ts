import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCategoria } from '../models/subcategoria';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  addCategoria(categoria: Categoria){
    return this.http.post<Categoria>(`${this.apiUrl}/categoria/salvar`, categoria);
  }

  addCatWitSubCat(
    
  ){

  }
}
