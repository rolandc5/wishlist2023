import { Component } from '@angular/core';
import { StateManagementService } from './core/services/state-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = '';

  constructor(private stateManagementService: StateManagementService, private router: Router) {}

  state = this.stateManagementService.titleState.subscribe((data: string) => {
    this.title = data;
  })

  clickTitle() {
    this.title = 'Our Christmas Wishlist'
    this.router.navigate(['/']);
  }
}
