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
  newItem: string;

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.fetchItems();
    //this.addItem();
  }

  fetchItems() {
    this.itemsService.getAllItems()
    .subscribe(items => {
      this.items = items;
    });
  }

  addItem(newItem: string) {
    const myItem: Item = {
      id: null,
      name: newItem,
      status: false,
    };
    this.itemsService.createItem(myItem)
    .subscribe(item => {
      console.log(item);
      this.fetchItems();
      this.newItem = "";
    });
  }

}
