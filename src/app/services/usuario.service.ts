import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from '../shared/dialogs/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:3000/api/v1';

  constructor(private dialog: MatDialog, private http: HttpClient) { }

  registrar(usuario: Usuario){
    this.dialog.open(LoadingComponent, {
      data: {
        text: "Registrando usuário..."
      },
      disableClose: true
    });
    
    return this.http.post<Usuario>(`${this.apiUrl}/registro/usuario`, usuario);
  }
}
