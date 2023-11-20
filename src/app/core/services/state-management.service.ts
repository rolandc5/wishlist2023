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

  private descriptionStateSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _descriptionState: Observable<boolean> = this.descriptionStateSubject.asObservable();
  
  get descriptionState(): Observable<boolean> {
    return this._descriptionState;
  }
  
  set descriptionState(data: boolean) {
    this.descriptionStateSubject.next(data);
  }

  private modalStateSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _modalState: Observable<boolean> = this.modalStateSubject.asObservable();
  
  get modalState(): Observable<boolean> {
    return this._modalState;
  }
  
  set modalState(data: boolean) {
    this.descriptionStateSubject.next(data);
  }

  constructor() { }
}
