import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { DataStorageServce } from './shop-mobile/data.storage.service';
import { MobileModel } from './shop-mobile/mobile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private DataStorage:DataStorageServce ,private authService:AuthService){}
  itemChange = true
  mobile:MobileModel[]
  id:number
  ngOnInit(): void {
    this.DataStorage.FetchingData().subscribe(res=>{
      console.log(res)
     
    })
this.authService.autologin()

  }
}
