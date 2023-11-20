import { Component, OnInit, Input } from '@angular/core';
import { ListService } from 'src/app/core/services/list.service';
import { StateManagementService } from 'src/app/core/services/state-management.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input() item: any;
  
  constructor(private stateManagementService: StateManagementService, private listService: ListService) {
  }

  ngOnInit() {
  }

  backBtn() {
    this.stateManagementService.descriptionState = false;
  }

  clickReserved() {
    this.listService.putBought();
  }
}
