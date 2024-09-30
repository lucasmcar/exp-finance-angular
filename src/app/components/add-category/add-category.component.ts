import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent  implements OnInit {
  
  formNovaCategoria: FormGroup;
  categoria: string = '';
  subcategorias: { nome: string }[] = [];
  mostrarCard: boolean = false;


  constructor(private fb: FormBuilder){
    this.formNovaCategoria = fb.group({
      categoriaInp: ['', Validators.required]
    })
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isFormValid() {
    return this.formNovaCategoria.valid;
  }

  adicionarSubcategoria() {
    this.subcategorias.push({ nome: '' });
    this.mostrarCard = true;
  }

  removerSubcategoria(index: number) {
    this.subcategorias.splice(index, 1);
    if (this.subcategorias.length === 0) {
      this.mostrarCard = false;  // Oculta o card se não houver subcategorias
    }
  }

  salvar(){}

}
