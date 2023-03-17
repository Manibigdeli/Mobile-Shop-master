import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccessoriesModel } from '../accessories.model';
import { AccessoriesService } from '../accessories.service';

@Component({
  selector: 'app-accessories-detail',
  templateUrl: './accessories-detail.component.html',
  styleUrls: ['./accessories-detail.component.css']
})
export class AccessoriesDetailComponent implements OnInit{
  constructor(private route:ActivatedRoute ,private acssService:AccessoriesService , private router:Router){}

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

Onedit(){
  this.router.navigate(['edit'],{relativeTo:this.route})
}
}
