import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/auth/user.model';
import { UserDataStorageService } from '../shared/user.data.storage.service';
import { USerModel } from '../user.model';
import { USerService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
user:USerModel[]
id:number
constructor(private userService:USerService,private router:Router 
  , private route:ActivatedRoute , private datastorage:UserDataStorageService){}

ngOnInit(){
this.userService.change.subscribe(
  (user : USerModel[])=>{
    this.user = user
  }
)
  this.user = this.userService.getuser()
  this.fetchdata()
}



OnClick(){
  this.router.navigate(['user-table'])
   }
   OnAdd(){
    this.router.navigate(['new'],{relativeTo:this.route})
   }

   OnSave(){
    this.datastorage.SaveData().subscribe(
      res=>{
        console.log(res)
      }
    )
   }

   fetchdata(){
    this.datastorage.fetchingData().subscribe(
      res=>{
        res + 'Userinformation'
        console.log(res)
      }
    )
   }
}
