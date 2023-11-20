import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StateManagementService } from '../core/services/state-management.service';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    TitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    StateManagementService
  ],
  exports: [
    TitleComponent
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
