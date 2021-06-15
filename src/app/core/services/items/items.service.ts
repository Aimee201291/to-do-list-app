import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from './../../models/item.model';

import { environment } from './../../../../environments/environment';

import { ItemsComponent } from './../../../item/components/items/items.component';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllItems() {
    return this.http.get<Item[]>(`${environment.url_api}/all`);
  }

  createItem(item: Item) {
    return this.http.post(`${environment.url_api}/save`, item);
  }

  updateProduct(id: number, changes: Partial<Item>) {
    return this.http.put(`${environment.url_api}/${id}`, changes);
  }

  deleteItem(id: number) {
    return this.http.delete(`${environment.url_api}/delete/${id}`);
  }
}
