import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListIncomeComponent } from '../list-income.component';

const routes: Routes = [
  {
    path: '', component: ListIncomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListIncomeRoutingModule { }
