import { Component } from '@angular/core';
import { StateManagementService } from 'src/app/core/services/state-management.service';
@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent {

  titleChange = [
    'Mary\'s Wishlist',
    'Mila\'s Wishlist',
    'Roland\'s Wishlist',
  ]

  constructor(private stateManagementService: StateManagementService) {
  }

  listSelect(name: number) {
    this.stateManagementService.titleState = this.titleChange[name];
  }
}
