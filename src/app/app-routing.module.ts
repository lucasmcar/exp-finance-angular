import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: ()=>import('./components/login/login/login.module')
    .then(m => m.LoginModule)
  },
  {
    path: 'registro/novo',
    loadChildren: () =>import('./components/register/register/register.module')
    .then(m => m.RegisterModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard/dashboard.module')
    .then(m => m.DashboardModule)
  },
  {
    path : 'registro/caixa',
    loadChildren: ()=> import('./components/registro-caixa/registro-caixa/registro-caixa.module')
    .then(m => m.RegistroCaixaModule)
  },
  {
    path: 'lista/receita',
    loadChildren: () => import('./components/list-income/list-income/list-income.module')
    .then( m => m.ListIncomeModule)
  },
  {
    path: 'add/categoria',
    loadChildren: () => import('./components/add-category/add-category/add-category.module')
    .then(m => m.AddCategoryModule)
  },
  {
    path: 'income-details/:id',
    loadChildren: () => import('./components/income-details/income-details/income-details.module')
    .then(m => m.IncomeDetailsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
