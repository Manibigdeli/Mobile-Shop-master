import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable } from "rxjs";
import { DataStorageServce } from "./data.storage.service";
import { MobileModel } from "./mobile.model";
import { ShopService } from "./shop.service";
@Injectable({providedIn:'root'})
export class ShopMobileResolver implements Resolve<MobileModel[]>{

    constructor(private mobileService:ShopService , private dataStorage : DataStorageServce){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const Mobile = this.mobileService.getitem();
        if(Mobile.length === 0){
            this.dataStorage.FetchingData()
        }else{
            return Mobile
        }
        
    }

}