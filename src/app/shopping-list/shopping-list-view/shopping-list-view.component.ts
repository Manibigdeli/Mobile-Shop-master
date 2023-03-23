import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListModel } from '../list-model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-view',
  templateUrl: './shopping-list-view.component.html',
  styleUrls: ['./shopping-list-view.component.css']
})
export class ShoppingListViewComponent implements OnInit {
  id:number
  list : ShoppingListModel
  constructor(private route : ActivatedRoute 
    ,private shoppingService:ShoppingListService , private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id']
        this.list = this.shoppingService.getindex(this.id)
      }
    )
  }


  Ondelet(){
    this.shoppingService.Ondelete(this.id)
    this.router.navigate(['/shopping-list'])
  }

}
