import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { DataStorageServce } from '../shop-mobile/data.storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  authenticated = false
  
  constructor(private DataStorage:DataStorageServce , private authService:AuthService,private router:Router){}
  OnSaveData(){
  this.DataStorage.SavingData().subscribe(
    res=>{
      console.log(res)
    }
  )
  }

  ngOnInit(): void {
    this.authService.user.subscribe(
      user=>{
        console.log(user)
        this.authenticated = !!user
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
  
  Onlogout(){
    this.authService.logout()
  }

  Onprofile(){
    this.router.navigate(['/user'])
  }
}
