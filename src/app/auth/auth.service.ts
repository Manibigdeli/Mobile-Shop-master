import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { AuthModel } from "./auth.model";
import { UserModel } from "./user.model";

@Injectable({providedIn:'root'})
export class AuthService{
constructor(private http:HttpClient ,private router:Router){}
user = new BehaviorSubject<UserModel>(null)

SignUp(email:string , password:string){
return this.http.post<AuthModel>
('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKC70vVsqSdvrMBgxY0noKqALJ0afyMro',{
    email,
    password,
    returnSecureToken:true
}).pipe(catchError(this.errorhandeling),tap(res=>{
    this.Auth(res.email ,res.idToken , +res.expiresIn  , res.localId)
}))}


SignIn(email:string , password:string){
     return this.http.post<AuthModel>
     ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKC70vVsqSdvrMBgxY0noKqALJ0afyMro',{
    email:email,
    password:password,
    returnSecureToken : true
}).pipe(catchError(this.errorhandeling),tap(res=>{
    this.Auth(res.email , res.idToken , +res.expiresIn , res.localId)
}))
}



private Auth(email:string , idToken:string , expiresIn: number , id:string){
const Expirationdate = new Date(new Date().getTime() + +expiresIn * 1000 )
const newuser = new UserModel(email , idToken , id , Expirationdate )
this.user.next(newuser);
localStorage.setItem('information',JSON.stringify(newuser))
}

logout(){
  this.user.next(null);
  this.router.navigate(['/shop'])
}

autologin(){
  const data:{
    email:string , id:string , token:string , tokenexpration:string
  } = JSON.parse(localStorage.getItem('information'))
  if(!data){
    return
  }
  const NewUser = new UserModel(data.email,
    data.id,data.token,new Date(data.tokenexpration));
    if(data.token){
      this.user.next(NewUser)
    }
}








private errorhandeling(errorRes : HttpErrorResponse){
    let errormessage = 'An unknow error!';
    if(!errorRes.error || !errorRes.error.error){
      return throwError(errormessage)
    }
    switch (errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errormessage = 'this email exist already';
        break;
        case 'INVALID_PASSWORD':
          errormessage = 'INVALID_PASSWORD';
          break;
          case 'EMAIL_NOT_FOUND':
            errormessage = 'EMAIL NOT FOUND'
  }
  
  return throwError(errormessage)

  }

}


