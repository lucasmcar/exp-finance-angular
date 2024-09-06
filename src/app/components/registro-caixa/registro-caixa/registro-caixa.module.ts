import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroCaixaRoutingModule } from './registro-caixa-routing.module';
import { MaterialModule } from '../../../shared/material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegistroCaixaRoutingModule,
    MaterialModule
  ]
})
export class RegistroCaixaModule { }
