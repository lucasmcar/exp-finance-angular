import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  cardTitle : string = '';
  cardSubTitle : string = '';
  formLogin: FormGroup;

  constructor(private fb: FormBuilder){

    this.cardTitle = "Faça seu login";
    this.cardSubTitle = "Acesse seu controle financeiro";

    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
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
    console.log("Clicou em submit")
  }

  logout(){}

}
