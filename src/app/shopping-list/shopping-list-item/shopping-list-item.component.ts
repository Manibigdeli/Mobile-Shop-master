import { Component, Input } from '@angular/core';
import { ShoppingListModel } from '../list-model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent {
  @Input() list:ShoppingListModel
  @Input() id:number
  constructor(private shoppinService:ShoppingListService){}


  

}
