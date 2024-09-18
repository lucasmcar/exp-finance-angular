import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './shared/material/material.module';
import { RegisterComponent } from './components/register/register.component';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './shared/dialogs/loading/loading.component';
import { SuccessComponent } from './shared/dialogs/success/success.component';
import { ErrorComponent } from './shared/dialogs/error/error.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { CardGraphsComponent } from './shared/card-graphs/card-graphs.component';
import { RegistroCaixaComponent } from './components/registro-caixa/registro-caixa.component';
import { AuthInterceptor } from './interceptor/AuthInterceptor';
import { CardDashboardComponent } from './shared/card-dashboard/card-dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoadingComponent,
    SuccessComponent,
    ErrorComponent,
    DashboardComponent,
    CardGraphsComponent,
    RegistroCaixaComponent,
    CardDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    
    
  ],
  providers: [
    AuthGuard,
    provideAnimationsAsync(),
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
