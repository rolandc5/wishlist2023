import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {
  private titleStateSubject: BehaviorSubject<string> = new BehaviorSubject('Our Christmas Wishlist');
  private _titleState: Observable<string> = this.titleStateSubject.asObservable();

  get titleState(): Observable<string> {
    return this._titleState;
  }

  set titleState(data: string) {
    this.titleStateSubject.next(data);
  }

  constructor() { }
}
