import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFtRoutingModule } from './list-ft-routing.module';

import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { DescriptionComponent } from './description/description.component';

import { ListService } from 'src/app/core/services/list.service';

@NgModule({
  declarations: [ListComponent, ItemComponent, DescriptionComponent],
  imports: [
    CommonModule,
    ListFtRoutingModule
  ],
  providers: [ListService]
})
export class ListFtModule { }
