import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private httpClient: HttpClient) { }

  getList() {
    return this.httpClient.get('https://wishlist2023be-8964f48fca6b.herokuapp.com/getList');
  }
}
