import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  pageName = [
    'Mary',
    'Mila',
    'Roland'
  ]

  constructor(private stateManagementService: StateManagementService, private router: Router) {
  }

  listSelect(name: number) {
    this.stateManagementService.titleState = this.titleChange[name];
    this.router.navigate(['/list'], { queryParams: {
      'name': this.pageName[name]
    }})
  }
}
