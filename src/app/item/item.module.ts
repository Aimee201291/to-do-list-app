import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemsComponent } from './components/items/items.component';

import { ItemRoutingModule } from './item-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ItemRoutingModule,
    FormsModule
  ]
})
export class ItemModule {

}
