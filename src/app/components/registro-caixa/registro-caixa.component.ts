import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Receita } from '../../models/receita';
import { ReceitaService } from '../../services/receita.service';
import { Router } from '@angular/router';
import { DespesaService } from '../../services/despesa.service';
import { Despesa } from '../../models/despesa';

@Component({
  selector: 'app-registro-caixa',
  templateUrl: './registro-caixa.component.html',
  styleUrl: './registro-caixa.component.css'
})
export class RegistroCaixaComponent implements OnInit {

  origens = [
    {id: 0, nome: ''},
    {id: 1, nome: 'Pix'},
    {id: 2, nome: 'Cartão de Crédito'},
    {id: 3, nome: 'Cartão de Débito'},
    {id: 4, nome: 'TED'},
    {id: 5, nome: 'Físico'}
  ]

  categorias = [
    { id: 0, nome: '' },
    { id: 1, nome: 'Empréstimo' },
    { id: 2, nome: 'Prestação de Serviço' },
    { id: 3, nome: 'Investimentos' },
    { id: 4, nome: 'Venda' },
  ];

  tipos = [
    { id: 0, nome: '' },
    { id: 1, nome: 'Receita' },
    { id: 2, nome: 'Saídas' },

  ];


  id: any;
  isDespesa: boolean = false;
  formFinanRegister: FormGroup;
  categoriaSelecionada: number | null = null;
  tipoSelecionado: number | null = null;

  constructor(
    private fb: FormBuilder, 
    private receitaService: ReceitaService, 
    private despesaService: DespesaService,
    private router: Router
  ) {
    this.formFinanRegister = this.fb.group({
      valor: ['', Validators.required],
      descricao: ['', Validators.required],
      idusuario: [localStorage.getItem('userId')],
      idcategoria: ['', Validators.required],
      idtipo: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.id = localStorage.getItem('userId');
  }

  registerFinan() {

    const { valor, descricao, idusuario, idcategoria } = this.formFinanRegister.value;

    if (this.tipoSelecionado === 1) {
      const receita: Receita = {
        valor,
        descricao,
        data_receita: new Date(),
        idusuario,
        idcategoria
      }

      this.receitaService.salvarReceita(receita).subscribe({
        next: () => {
          this.router.navigate(['/dashboard'])
        },
        error: err => console.error("Não foi possível salvar", err)
      });
    }

    if(this.tipoSelecionado === 2 ){
      const despesa: Despesa = {
        valor,
        descricao,
        dataDespesa: new Date(),
        idusuario,
        idcategoria
      }

      this.despesaService.salvaDespesa(despesa).subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: err => console.error("Não foi possível salvar", err)
      });
    }
  }

  onCategoriaChange(event: any) {
    console.log(event.value)
    this.categoriaSelecionada = event.value;
  }

  onTipoChange(event: any) {
    console.log(event.value)
    this.tipoSelecionado = event.value;
  }

}
