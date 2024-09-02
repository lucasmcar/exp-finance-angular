import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../../../shared/material/material.module';
import { BaseChartDirective } from 'ng2-charts';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    BaseChartDirective
    
  ]
})
export class DashboardModule { }
