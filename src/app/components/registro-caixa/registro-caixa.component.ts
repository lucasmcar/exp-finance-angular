import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Receita } from '../../models/receita';
import { ReceitaService } from '../../services/receita.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-caixa',
  templateUrl: './registro-caixa.component.html',
  styleUrl: './registro-caixa.component.css'
})
export class RegistroCaixaComponent implements OnInit {
  

  categorias = [
    { id: 0, nome: ''},
    { id: 1, nome: 'Alimentação' },
    { id: 2, nome: 'Transporte' },
    { id: 3, nome: 'Educação' },
    { id: 4, nome: 'Lazer' },
    { id: 5, nome: 'Saúde' }
  ];

  tipos = [
    { id: 0, nome: ''},
    { id: 1, nome: 'Receita' },
    { id: 2, nome: 'Saídas' },
   
  ];


  id: any;
  isDespesa: boolean = false;
  formFinanRegister: FormGroup;
  categoriaSelecionada: number | null = null;
  tipoSelecionado: number | null = null;

  constructor(private fb: FormBuilder, private receitaService: ReceitaService, private router: Router){
    this.formFinanRegister = this.fb.group({
      valor: ['', Validators.required],
      descricao: ['', Validators.required],
      idusuario: [localStorage.getItem('userId')],
      idcategoria: ['', Validators.required] ,
      idtipo : ['', Validators.required]
    });

  }
  
  ngOnInit(): void {
    this.id = localStorage.getItem('userId');
  }

  registerFinan(){

    console.log("esta apertando")
    const { valor, descricao , idusuario, idcategoria } = this.formFinanRegister.value;

    const receita : Receita ={
      valor,
      descricao,
      dataReceita: new Date(),
      idusuario,
      idcategoria
    }

    console.log(receita, this.tipoSelecionado)

    if(this.tipoSelecionado === 1){
      this.receitaService.salvarReceita(receita).subscribe({
        next: () => {
          this.router.navigate(['/dashboard'])
        },
        error: err=> console.error("Não foi possível salvar", err)
      })
    }
  }

  onCategoriaChange(event: any) {
    console.log(event.value)
    this.categoriaSelecionada = event.value;
  }

  onTipoChange(event: any){
    console.log(event.value)
    this.tipoSelecionado = event.value;
  }

}
