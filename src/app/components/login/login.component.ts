import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  cardTitle : string = '';
  cardSubTitle : string = '';
  formLogin: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router){

    this.cardTitle = "Faça seu login";
    this.cardSubTitle = "Acesse seu controle financeiro";

    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }


  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.preventDefault()
    event.stopPropagation();
  }



  ngOnInit(): void {
    
  }

  login(){
    const { email, senha } = this.formLogin.value;
    this.loading = true;

    const user: Usuario ={
      nome: '',
      email,
      senha
    }

    this.loginService.login(user).subscribe({
      next: (response) => {
        this.loading=false;
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed', error);
        this.loading = false; // Oculta o spinner em caso de erro
      }
    })

  }

  logout(){}

}
