import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataStorageServce } from '../data.storage.service';
import { MobileModel } from '../mobile.model';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit , OnDestroy {
  Mobile:MobileModel[];
  id:number;
  fetch : Subscription
  save : Subscription

  constructor(private ShopService:ShopService , 
    private route:ActivatedRoute 
    , private router:Router , private dstaStorageService:DataStorageServce) { }

  ngOnInit(): void {
 this.fetch =   this.dstaStorageService.FetchingData().subscribe(res=>{
      console.log(res)
    })

    
   

   


  this.ShopService.ItemChange.subscribe(
    (item:MobileModel[])=>{
      this.Mobile = item
      this.id = this.Mobile.length;
   this.save =  this.dstaStorageService.SavingData().subscribe(res=>{
        console.log(res)
      })
    }
  
    )
  this.Mobile = this.ShopService.getitem();
 
  }


  OnAdd(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

  HomePage(){
    this.router.navigate(['/shop']);
  }

  ngOnDestroy(): void {
    this.fetch.unsubscribe()
    this.save.unsubscribe()
  }

}
