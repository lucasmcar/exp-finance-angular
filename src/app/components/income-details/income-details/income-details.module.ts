import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeDetailsRoutingModule } from './income-details-routing.module';
import { MaterialModule } from '../../../shared/material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IncomeDetailsRoutingModule,
    MaterialModule
  ]
})
export class IncomeDetailsModule { }
