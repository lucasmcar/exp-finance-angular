import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Categoria } from '../../models/categoria';

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
  idusuario: any;


  constructor(private fb: FormBuilder, private categoriaService: CategoryService){
    this.formNovaCategoria = fb.group({
      categoriaInp: ['', Validators.required]
    })
  }
  
  ngOnInit(): void {
    this.idusuario = localStorage.getItem('userId');
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

  salvar(){
    const { nome } = this.formNovaCategoria.value;

    if(this.subcategorias.length !== 0) {

      const categoria : Categoria = {
        idusuario: this.idusuario,
        nome
      }

      this.categoriaService.addCategoria(categoria)

    }
  }

}
