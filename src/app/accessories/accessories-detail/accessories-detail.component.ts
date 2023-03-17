import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AccessoriesModel } from '../accessories.model';
import { AccessoriesService } from '../accessories.service';

@Component({
  selector: 'app-accessories-detail',
  templateUrl: './accessories-detail.component.html',
  styleUrls: ['./accessories-detail.component.css']
})
export class AccessoriesDetailComponent implements OnInit{
  constructor(private route:ActivatedRoute ,private acssService:AccessoriesService){}

  accessories:AccessoriesModel 
   id:number
ngOnInit(): void {
  this.route.params.subscribe(
    (param:Params)=>{
      this.id = +param['id'];
      this.accessories = this.acssService.getid(this.id)
    }
  )
}


}
