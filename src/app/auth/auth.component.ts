import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  LoginMode = true;
  error = false
  isloading = false

 constructor(private AuthService:AuthService , private router:Router){}

  OnSwitch(){
  this.LoginMode = !this.LoginMode
  }


  OnSubmitForm(authform:NgForm){
    if(!authform.valid){
      return
    }

    const email = authform.value.email;
    const password = authform.value.password;
    let authObs$ = new Observable<any>()
    this.isloading
     if(this.LoginMode){

      authObs$ = this.AuthService.SignIn(email,password);
      this.isloading = true

     }else{

      authObs$ = this.AuthService.SignIn(email,password);
      this.isloading = true

     }

     authObs$.subscribe(res=>{
      console.log(res),
      this.router.navigate(['/shop'])
     },errormessage=>{
      this.isloading = false
      this.error = errormessage;
      console.log(errormessage);
     })

  }
 
 
}
