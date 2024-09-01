import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  

  formRegister: FormGroup;
  error: string = '';

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router){
    this.formRegister = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  registerUser(){
    const { nome, email, senha } = this.formRegister.value;

    const usuario: Usuario = {
      nome,
      email,
      senha
    } 

    this.usuarioService.registrar(usuario).subscribe({
      next: ()=>this.router.navigate(['/login']),
      error: err =>this.error = "Erro ao cadastrar"
    })
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.preventDefault()
    event.stopPropagation();
  }

}
