import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { text: string }){}

  get text(){
    return this.data.text || 'criando usuario...'
  }

}
