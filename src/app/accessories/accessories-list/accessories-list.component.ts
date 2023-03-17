import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AccessoriesModel } from '../accessories.model';
import { AccessoriesService } from '../accessories.service';

@Component({
  selector: 'app-accessories-list',
  templateUrl: './accessories-list.component.html',
  styleUrls: ['./accessories-list.component.css']
})
export class AccessoriesListComponent implements OnInit{
  accessories:AccessoriesModel[];
  id:number
  constructor(private accessori:AccessoriesService , private router :Router , private route:ActivatedRoute){}
  ngOnInit(): void {
    this.accessori.itemchange.subscribe(
      (Accessories:AccessoriesModel[])=>{
        this.accessories = Accessories;
        
      }
    )
    this.accessories = this.accessori.getaccessories();
    
  }


  Onedit(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}
