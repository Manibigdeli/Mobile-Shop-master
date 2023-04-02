import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccessoriesDataStorageService } from './accessories/accessories.data.storage.service';
import { AuthService } from './auth/auth.service';
import { DataStorageServce } from './shop-mobile/data.storage.service';
import { MobileModel } from './shop-mobile/mobile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private DataStorage:DataStorageServce
     ,private authService:AuthService , private data:AccessoriesDataStorageService){}
  itemChange = true
  mobile:MobileModel[]
  id:number

  error:string
  ngOnInit(): void {
    this.authService.autologin()
  }


}
