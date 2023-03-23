import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListModel } from './list-model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
 list : ShoppingListModel[]
 id:number

constructor(private shoppinglist:ShoppingListService){}

ngOnInit(): void {
  this.list = this.shoppinglist.getlist()
}

Ondelete(){
this.shoppinglist.Ondelete(this.id)
}
}
