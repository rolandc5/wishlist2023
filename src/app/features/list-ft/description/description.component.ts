import { Component, OnInit, Input } from '@angular/core';
import { StateManagementService } from 'src/app/core/services/state-management.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input() item: any;
  
  constructor(private stateManagementService: StateManagementService) {
  }

  ngOnInit() {
    // this.description = this.stateManagementService.descriptionState;
  }

  backBtn() {
    this.stateManagementService.descriptionState = false;
  }
}
