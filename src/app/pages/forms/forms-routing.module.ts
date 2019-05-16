import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { ClientMasterComponent } from './client/client-master/client-master.component';
import { IpoMasterComponent } from './ipo/ipo-master/ipo-master.component';
import { ClientReportComponent } from './ipo/client-report/client-report.component';
import { AdminReportComponent } from './ipo/admin-report/admin-report.component';
import {ActivityComponent } from './ipo/activity/activity.component';
const routes: Routes = [{
  path: '',
  component: FormsComponent,
  children: [
    {
      path: 'client',
      component: ClientMasterComponent,
    },
    {
      path: 'order',
      component: IpoMasterComponent,
    },
    {
      path: 'clientReport',
      component: ClientReportComponent,
    },{
      path:'adminReport',
      component:AdminReportComponent,
    },{
      path:'orderEntry',
      component:ActivityComponent,
    }
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {

}

export const routedComponents = [
  FormsComponent
];
