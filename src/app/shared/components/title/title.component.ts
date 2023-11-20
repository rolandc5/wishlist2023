import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateManagementService } from 'src/app/core/services/state-management.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  title: string = 'Our Christmas Wishlist';

  constructor(private stateManagementService: StateManagementService, private activatedRoute: ActivatedRoute, private router: Router) {}

  state = this.stateManagementService.titleState.subscribe((data: any) => {
    this.title = data;
  })
  
  clickTitle() {
    this.title = 'Our Christmas Wishlist'
    this.router.navigate(['/']);
  }
}
