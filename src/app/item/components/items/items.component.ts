import { Component, OnInit } from '@angular/core';

import { Item } from './../../../core/models/item.model';
import { ItemsService } from './../../../core/services/items/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems() {
    this.itemsService.getAllItems()
    .subscribe(items => {
      this.items = items;
    });
  }

}
