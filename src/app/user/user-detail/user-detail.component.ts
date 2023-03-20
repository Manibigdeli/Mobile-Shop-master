import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserModel } from 'src/app/auth/user.model';
import { USerModel } from '../user.model';
import { USerService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  id:number
  user:USerModel
  constructor(private route:ActivatedRoute , private userService:USerService, private router :Router){
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id']
        this.user = this.userService.getuserid(this.id)
      }
    )
  }
  
  Onedit(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
}
