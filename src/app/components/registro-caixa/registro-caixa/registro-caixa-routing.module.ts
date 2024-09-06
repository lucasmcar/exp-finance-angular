import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroCaixaComponent } from '../registro-caixa.component';

const routes: Routes = [
  {
    path: '', component: RegistroCaixaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroCaixaRoutingModule { }
