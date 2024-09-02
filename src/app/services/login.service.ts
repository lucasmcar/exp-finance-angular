import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/api/v1';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  login(usuario: Usuario){

    return this.http.post<Usuario>(`${this.apiUrl}/auth`, usuario)
      .pipe(map(user => {
        console.log(user)
        if (user && user.token) {
          localStorage.setItem('token', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));


    //return this.http.post<Usuario>(`${this.apiUrl}/auth`, usuario);
  }

  logout(): void {
    localStorage.removeItem('token'); // Remove o token do localStorage
    localStorage.removeItem('nomeUsuario'); // Remove o token do localStorage
    localStorage.removeItem('userId'); // Remove o UserId do localStorage
    this.router.navigate(['/login']); // Redireciona para a página de login
  }
}
