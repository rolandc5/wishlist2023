import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyFtRoutingModule } from './family-ft-routing.module';
import { RouterModule } from '@angular/router';

import { FamilyComponent } from './family/family.component';

@NgModule({
  declarations: [FamilyComponent],
  imports: [
    CommonModule,
    FamilyFtRoutingModule,
    RouterModule
  ],
})
export class FamilyFtModule { }
