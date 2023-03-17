import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { AuthModel } from "./auth.model";
import { UserModel } from "./user.model";

@Injectable({providedIn:'root'})
export class AuthService{
constructor(private http:HttpClient){}
user = new BehaviorSubject<UserModel>(null)

SignUp(email:string , password:string){
return this.http.post<AuthModel>
('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKC70vVsqSdvrMBgxY0noKqALJ0afyMro',{
    email,
    password,
    returnSecureToken:true
}).pipe(catchError(this.errorhandel),tap(res=>{
    this.Auth(res.email ,res.idToken , +res.expiresIn  , res.localId)
}))}


SignIn(email:string , password:string){
     return this.http.post<AuthModel>
     ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKC70vVsqSdvrMBgxY0noKqALJ0afyMro',{
    email:email,
    password:password,
    returnSecureToken : true
}).pipe(catchError(this.errorhandel),tap(res=>{
    this.Auth(res.email , res.idToken , +res.expiresIn , res.localId)
}))
}



private Auth(email:string , idToken:string , expiresIn: number , id:string){
const ExprationDate = new Date(new Date().getTime() + +expiresIn * 1000 )
const newuser = new UserModel(email , idToken , id , ExprationDate )
this.user.next(newuser)
}










private errorhandel(errorRes : HttpErrorResponse){
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


