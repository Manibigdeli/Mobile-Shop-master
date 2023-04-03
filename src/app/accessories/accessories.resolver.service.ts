import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { AccessoriesDataStorageService } from './accessories.data.storage.service';
import { AccessoriesModel } from './accessories.model';
import { AccessoriesService } from './accessories.service';
@Injectable({ providedIn: 'root' })

@Injectable({providedIn:'root'})
export class AccessoriesResolver implements Resolve<AccessoriesModel[]>{
    constructor( private accessoriesService:AccessoriesService 
        ,private accessoriesdata:AccessoriesDataStorageService){}
          resolve(route: ActivatedRouteSnapshot , state:RouterStateSnapshot){
            
          const accessories = this.accessoriesService.getaccessories();
          if(accessories.length === 0){
            return this.accessoriesdata.fetchdata()
          }else{
            return accessories
          }
            
        }
    }

