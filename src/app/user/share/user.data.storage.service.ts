import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, map, tap } from 'rxjs/operators'
import { throwError } from 'rxjs'
import { USerModel } from '../user.model'
import { USerService } from '../user.service'

@Injectable({providedIn:'root'})
export class UserDataStorageService{
    constructor(private http : HttpClient , private userService:USerService){}

    SaveData(){
        const user = this.userService.getuser()
       return this.http.put<USerModel>
       ('https://login-service-7b7b5-default-rtdb.firebaseio.com/user.json', user)
    }

    fetchingData(){
       return this.http.get<USerModel[]>
       ('https://login-service-7b7b5-default-rtdb.firebaseio.com/user.json')
       .pipe(map(user=>{
        return user
       }),tap(user=>{
        this.userService.setuser(user)
       })).pipe(catchError(this.ErrorHandle))
    }



private ErrorHandle(errorres : HttpErrorResponse){
let errrormessage = 'error not founded 404'
if(errorres.error || errorres.error.error){
    return throwError(errrormessage)
}
switch (errorres.error.error.message){
    case  'HttpErrorResponse' :
        errrormessage  = 'HttpErrorResponse'
}
return throwError(errrormessage)
}

}