import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListIncomeRoutingModule } from './list-income-routing.module';
import { MaterialModule } from '../../../shared/material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListIncomeRoutingModule,
    MaterialModule
  ]
})
export class ListIncomeModule { }
