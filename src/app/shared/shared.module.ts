import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StateManagementService } from '../core/services/state-management.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
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
