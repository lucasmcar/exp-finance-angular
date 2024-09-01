import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './shared/material/material.module';
import { RegisterComponent } from './components/register/register.component';
import {  HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './shared/dialogs/loading/loading.component';
import { SuccessComponent } from './shared/dialogs/success/success.component';
import { ErrorComponent } from './shared/dialogs/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoadingComponent,
    SuccessComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
