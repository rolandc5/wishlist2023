import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  wishlistOwner: string = '';
  titleChange: any = {
    mary: 'Mary\'s Wishlist',
    mila: 'Mila\'s Wishlist',
    roland: 'Roland\'s Wishlist',
  }


  state = this.stateManagementService.descriptionState.subscribe((data: boolean) => {
    this.modal = data;
  })

  constructor(private stateManagementService: StateManagementService, private listService: ListService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this.items) {
      this.listService.getList();
    }
    this.listService.list.subscribe((data: any) => {
      if (data) {
        this.items = data.filter((data: any) => this.wishlistOwner.includes(data.name.toLowerCase())).sort((a: any, b: any) => {
          return a.bought - b.bought
        });
        this.item = this.items.filter((item: any) => item?._id === this.item?._id)[0];
        this.stateManagementService.titleState = this.titleChange[this.wishlistOwner];
      }
    });
  
    this.wishlistOwner = this.activatedRoute.snapshot.queryParams['name'].toLowerCase();
  }

  clickGetDescription(item: any) {
    this.item = item;
    this.stateManagementService.descriptionState = true;
  }
}
