import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCategoryRoutingModule } from './add-category-routing.module';
import { MaterialModule } from '../../../shared/material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddCategoryRoutingModule,
    MaterialModule
  ]
})
export class AddCategoryModule { }
