import { Component, Input } from '@angular/core';
import { ShoppingListModel } from '../list-model';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent {
  @Input() list:ShoppingListModel
  @Input() id:number


}
