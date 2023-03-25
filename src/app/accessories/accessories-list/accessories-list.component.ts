import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccessoriesDataStorageService } from '../accessories.data.storage.service';
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
  error:string
  fetch:Subscription
  constructor(private accessori:AccessoriesService
     , private router :Router ,
      private route:ActivatedRoute ,
      private datastorage:AccessoriesDataStorageService){}
  ngOnInit(): void {
    this.accessori.itemchange.subscribe(
      (Accessories:AccessoriesModel[])=>{
        this.accessories = Accessories;
            }
    )
    this.fetch =  this.datastorage.fetchdata().subscribe(
      res=>{
        console.log(res)
      },errormessage=>{
        this.error = errormessage
      }
    )
    this.accessori.itemchange.subscribe(
      ()=>{
        this.datastorage.Savedata().subscribe(
          res=>{
            console.log(res)
          }
        )
      

        
      }
    )
    this.accessories = this.accessori.getaccessories();
    
  }


  Onedit(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}
