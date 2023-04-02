import { HttpClient , HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MobileModel } from "./mobile.model";
import { ShopService } from "./shop.service";
import {catchError, map, tap} from "rxjs/operators"
import { Subject, throwError } from "rxjs";

@Injectable({providedIn:'root'})
export class DataStorageServce{
    itemChnaged = new Subject<MobileModel>()
    index:number
    item:MobileModel[]
    constructor(private http:HttpClient , private ShopService:ShopService){}
    
  SavingData(){
    const item = this.ShopService.getitem()
   return this.http.put<MobileModel>('https://login-service-7b7b5-default-rtdb.firebaseio.com/shop.json',item)
    
  }

  FetchingData(){
   return this.http.get<MobileModel[]>
   ('https://login-service-7b7b5-default-rtdb.firebaseio.com/shop.json').pipe(map(
    item=>{
        return item
    }
   ),tap(item =>{
    this.ShopService.set(item)
   })).pipe(catchError(this.errorhandle))
  }




  private errorhandle(res : HttpErrorResponse){
   let errormessage = 'error not founded';
   if(res.error || res.error.error){
    return throwError(errormessage);
   }
   switch(res.error.error.message){
    case 'HttpErrorResponse' :
      errormessage = 'HttpErrorResponse'
   }
  }
}