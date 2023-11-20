import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, from, lastValueFrom, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private listSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  private _list: Observable<any> = this.listSubject.asObservable();

  get list() {
    return this._list;
  }

  set list(data: any) {
    this.listSubject.next(data);
  }

  constructor(private httpClient: HttpClient) { }

  getList() {
    lastValueFrom(this.httpClient.get('https://wishlist2023be-8964f48fca6b.herokuapp.com/getList')).then((data: any) => {
      this.list = data;
    });
  }

  putBought(boolean: boolean, item: any) {
    lastValueFrom(this.httpClient.put('http://localhost:8080/updateList', { id: item._id, bought: boolean }).pipe(tap(() => {
      this.getList();
    })));
  }
}
