import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  login(usuario: Usuario){
    return this.http.post<Usuario>(`${this.apiUrl}/auth`, usuario);
  }
}
