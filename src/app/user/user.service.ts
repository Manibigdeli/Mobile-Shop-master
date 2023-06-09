import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { UserModel } from "../auth/user.model";
import { USerModel } from "./user.model";


@Injectable({providedIn:'root'})
export class USerService{
    change = new Subject<USerModel[]>()
    user : USerModel[] = [
        new USerModel('@themani' , 'mani','bigdeli' , '09125411618')
    ]

    // user : USerModel[] = []


    getuser(){
       return this.user.slice()
       
    }

    UpdateUserList(){
     return this.change.next(this.user.slice())
    }


    getuserid(index:number){
      return  this.user[index]
    }


    UpdateUser(index:number , newuser:USerModel){
      this.user[index] = newuser
      this.change.next(this.user.slice())
    }


    AddUser(user:USerModel){
    this.user.push(user);
    this.change.next(this.user.slice())
    }

    setuser(user:USerModel[]){
      this.user  = user
      this.change.next(this.user.slice())
    }
}