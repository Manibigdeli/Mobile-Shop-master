import { Subject } from "rxjs";
import { MobileModel } from "./mobile.model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ShopService{
    ItemChange = new Subject<MobileModel[]>()    
    private Mobile:MobileModel[] = [
        new MobileModel('Iphone 14 ' , 'data:image/jpeg;base64,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' , 'best phone'),
        new MobileModel('Samsung S22' , 'data:image/jpeg;base64,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' , 'best Shoes'),
        new MobileModel('S21FE' , 'data:image/jpeg;base64,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',
        'Samsung best Model in 2022')
    ]
    // private Mobile:MobileModel[] = []

    constructor(private http:HttpClient){}
   
   updateitem(item:MobileModel[]){
    this.Mobile = item;
    this.ItemChange.next(this.Mobile.slice())

   }

    getid(index:number){
     return this.Mobile[index]
    }

    getitem(){
      return  this.Mobile.slice()
    }

    Add(item:MobileModel){
      this.Mobile.push(item);
      this.ItemChange.next(this.Mobile.slice())

    }
    
    set(mobile:MobileModel[]){
      this.Mobile = mobile;
      this.ItemChange.next(this.Mobile.slice())
    }

    Updateitem(index:number , newitem:MobileModel){
    this.Mobile[index] = newitem;
    this.ItemChange.next(this.Mobile.slice())
    }
}