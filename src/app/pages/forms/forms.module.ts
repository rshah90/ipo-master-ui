import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';
import { ClientMasterComponent } from './client/client-master/client-master.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { IpoMasterComponent } from './ipo/ipo-master/ipo-master.component';
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
  ],
})
export class FormsModule { }
