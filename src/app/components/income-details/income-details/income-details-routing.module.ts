import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeDetailsComponent } from '../income-details.component';

const routes: Routes = [
  {
    path: '', component: IncomeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeDetailsRoutingModule { }
