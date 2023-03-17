import { Component, Input, OnInit } from '@angular/core';
import { MobileModel } from '../mobile.model';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
 @Input() mobile:MobileModel;
 @Input() id:number
  constructor() { }

  ngOnInit(): void {
  }

}
