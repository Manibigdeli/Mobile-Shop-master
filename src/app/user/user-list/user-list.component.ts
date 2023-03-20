import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/auth/user.model';
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
constructor(private userService:USerService,private router:Router , private route:ActivatedRoute){}

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
   OnAdd(){
    this.router.navigate(['new'],{relativeTo:this.route})
   }
}
