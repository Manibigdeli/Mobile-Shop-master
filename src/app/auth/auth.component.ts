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
    let letObs$ = new Observable<any>()
    
     if(this.LoginMode){
      letObs$ = this.AuthService.SignIn(email,password);
     }else{
      letObs$ = this.AuthService.SignIn(email,password)
     }

     letObs$.subscribe(res=>{
      console.log(res),
      this.router.navigate(['/shop'])
     },errormessage=>{
      this.error = errormessage;
      console.log(errormessage);
     })

  }
 
 
}
