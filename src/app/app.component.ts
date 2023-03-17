import { Component, OnInit } from '@angular/core';
import { DataStorageServce } from './shop-mobile/data.storage.service';
import { MobileModel } from './shop-mobile/mobile.model';
import { ShopService } from './shop-mobile/shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private DataStorage:DataStorageServce ,private ShopService:ShopService){}
  itemChange = true
  mobile:MobileModel[]
  id:number
  ngOnInit(): void {
    this.DataStorage.FetchingData().subscribe(res=>{
      console.log(res)
     
    })
  }
}
