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
}
