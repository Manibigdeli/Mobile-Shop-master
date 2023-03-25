import { Injectable } from "@angular/core";
import {HttpClient , HttpErrorResponse} from '@angular/common/http'
import { AccessoriesService } from "./accessories.service";
import { AccessoriesModel } from "./accessories.model";
import { catchError, map, tap } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({providedIn:'root'})
export class AccessoriesDataStorageService{
constructor(private http:HttpClient , private accessoriesService:AccessoriesService){}
    Savedata(){
        const accessories = this.accessoriesService.getaccessories()
        return  this.http.put<AccessoriesModel>
      ('https://login-service-7b7b5-default-rtdb.firebaseio.com/accessories.json',
        accessories)

    }


    fetchdata(){
      return  this.http.get<AccessoriesModel[]>
        ('https://login-service-7b7b5-default-rtdb.firebaseio.com/accessories.json').pipe(map(
           res=>{
            return res
            
           }
        ),tap(res=>{
            this.accessoriesService.setaccessories(res)
            console.log(res)
        })).pipe(catchError(this.errorhandle))
    }


  private errorhandle(res:HttpErrorResponse){
    let message = 'not founded message';
    if(res.error || res.error.error){
      return throwError(message)
    }
    switch(res.error.error.message){
      case '401' : 
      message = 'error 401 not found item'

    }
    return throwError(message)

  }
  

}