import { Component } from '@angular/core';
import { DataStorageServce } from '../shop-mobile/data.storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private DataStorage:DataStorageServce){}
  OnSaveData(){
  this.DataStorage.SavingData().subscribe(
    res=>{
      console.log(res)
    }
  )
  }

  LoadingData(){
    this.DataStorage.FetchingData().subscribe(
      res=>{
        console.log(res)
      }
    )
  }
}
