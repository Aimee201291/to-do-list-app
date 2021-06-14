import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsService } from './services/items/items.service'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ItemsService
  ]
})
export class CoreModule { }
