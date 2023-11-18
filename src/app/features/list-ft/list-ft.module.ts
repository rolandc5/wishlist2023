import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFtRoutingModule } from './list-ft-routing.module';

import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [ListComponent, ItemComponent],
  imports: [
    CommonModule,
    ListFtRoutingModule
  ]
})
export class ListFtModule { }
