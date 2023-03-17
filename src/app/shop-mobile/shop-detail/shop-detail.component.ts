import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params  , Router} from '@angular/router';
import { MobileModel } from '../mobile.model';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {
  constructor(private route:ActivatedRoute , private ShopService:ShopService , private router:Router){}
  id:number
  shop:MobileModel

ngOnInit(): void {
  this.route.params.subscribe(
    (param:Params)=>{
      this.id = +param['id'];
      this.shop = this.ShopService.getid(this.id)
    }
  )
}

Onedit(){
this.router.navigate(['edit'],{relativeTo:this.route})
}
}
