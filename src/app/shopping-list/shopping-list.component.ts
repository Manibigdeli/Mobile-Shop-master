import { Component, OnInit } from '@angular/core';
import { MobileModel } from '../shop-mobile/mobile.model';
import { ShoppingListModel } from './list-model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
list : ShoppingListModel[]

constructor(private shoppinglist:ShoppingListService){}

ngOnInit(): void {
  this.list = this.shoppinglist.getlist()
}
}
