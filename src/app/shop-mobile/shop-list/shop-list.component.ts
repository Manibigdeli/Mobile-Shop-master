import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileModel } from '../mobile.model';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  Mobile:MobileModel[];
  id:number;

  constructor(private ShopService:ShopService , 
    private route:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
  this.ShopService.ItemChange.subscribe(
    (item:MobileModel[])=>{
      this.Mobile = item
      this.id = this.Mobile.length
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

}
