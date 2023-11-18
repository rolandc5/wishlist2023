import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from 'src/app/core/services/list.service';
import { StateManagementService } from 'src/app/core/services/state-management.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  item: any;
  modal: boolean = false;
  items: any;

  state = this.stateManagementService.descriptionState.subscribe((data: boolean) => {
    this.modal = data;
  })

  constructor(private stateManagementService: StateManagementService, private listService: ListService, private router: Router) { }

  ngOnInit() {
    this.listService.getList().subscribe((data: any) => {
      this.items = data;
    })
  }

  clickGetDescription(item: any) {
    this.item = item;
    this.stateManagementService.descriptionState = true;
  }
}
