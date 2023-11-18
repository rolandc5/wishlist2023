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
  title: string = '';

  state = this.stateManagementService.descriptionState.subscribe((data: boolean) => {
    this.modal = data;
  })

  constructor(private stateManagementService: StateManagementService, private listService: ListService, private router: Router) { }

  ngOnInit() {
    this.stateManagementService.titleState.subscribe(data => {
      this.title = data;
    })
    this.listService.getList().subscribe((data: any) => {
      this.items = data.filter((data: any) => this.title.toLowerCase().includes(data.name.toLowerCase()) );
    })
  }

  clickGetDescription(item: any) {
    this.item = item;
    this.stateManagementService.descriptionState = true;
  }
}
