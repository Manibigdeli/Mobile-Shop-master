import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { USerModel } from '../user.model';
import { USerService } from '../user.service';
import {HttpClient} from '@angular/common/http'
import { UserModel } from 'src/app/auth/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
user:USerModel[]
id:number
constructor(private userService:USerService,private router:Router 
  , private route:ActivatedRoute , private http:HttpClient){}

ngOnInit(){
this.userService.change.subscribe(
  (user : USerModel[])=>{
    this.user = user
  }
)

this.route.params.subscribe()

  this.user = this.userService.getuser()
}



OnClick(){
  this.router.navigate(['user-table'])
   }

   fetchdata(){
    this.http.get<USerModel>('https://login-service-7b7b5-default-rtdb.firebaseio.com/user.json').subscribe(
      res=>{
        console.log(res)
      }
    )
   }

   OnSave(){

   }
   OnAdd(){
    this.router.navigate(['new'],{relativeTo:this.route})
   }
}
