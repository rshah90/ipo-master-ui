import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';
import { ClientMasterComponent } from './client/client-master/client-master.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { IpoMasterComponent } from './ipo/ipo-master/ipo-master.component';
import { ClientReportComponent } from './ipo/client-report/client-report.component';
import { AdminReportComponent } from './ipo/admin-report/admin-report.component';
import {ActivityComponent } from './ipo/activity/activity.component';
import {OrderActivityComponent } from './ipo/activity/order-activity/order-activity.component';
import { DatePipe } from '@angular/common';
@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    ClientMasterComponent,
    IpoMasterComponent,
    ClientReportComponent,
    AdminReportComponent,
    ActivityComponent
    
  ],
  providers:[DatePipe]
})
export class FormsModule { }
