import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/auth/user.model';
import { USerService } from '../user.service';
@Component({
  selector: 'app-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.css']
})
export class UserListTableComponent  implements OnInit{
  listOfData
    constructor(private userService:USerService){}
ngOnInit(): void {
  this.listOfData = this.userService.getuser()
}
 
}
