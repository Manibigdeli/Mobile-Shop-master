import { Component, Input } from '@angular/core';
import { AccessoriesModel } from '../accessories.model';

@Component({
  selector: 'app-accessories-item',
  templateUrl: './accessories-item.component.html',
  styleUrls: ['./accessories-item.component.css']
})
export class AccessoriesItemComponent {
@Input()  accessories : AccessoriesModel
@Input()  id:number
}
