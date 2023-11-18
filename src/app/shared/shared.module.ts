import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StateManagementService } from '../core/services/state-management.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    StateManagementService
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders<NgModule> {
    return {
       ngModule: SharedModule,
       providers: [StateManagementService]
   }
 }
}
