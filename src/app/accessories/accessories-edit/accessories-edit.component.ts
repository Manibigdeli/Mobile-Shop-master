import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccessoriesModel } from '../accessories.model';
import { AccessoriesService } from '../accessories.service';

@Component({
  selector: 'app-accessories-edit',
  templateUrl: './accessories-edit.component.html',
  styleUrls: ['./accessories-edit.component.css']
})
export class AccessoriesEditComponent {
  id:number

  accessori:AccessoriesModel
  editmode = false
  constructor(private route:ActivatedRoute 
    , private accessories:AccessoriesService,){
    this.route.params.subscribe(
      (param:Params)=>{
        this.id = +param['id']
        this.editmode = param['id'] !=null
        this.init()
      }
    )
  }
  form:FormGroup
private init(){




  this.form = new FormGroup({
    'name' : new FormControl(),
    'description' : new FormControl(),
    'img' : new FormControl()

  })
}


OnSubmit(){
  if(this.editmode){
  this.accessories.Updateaccessories(this.id , this.form.value);
  }else{
  this.accessories.Addnew(this.form.value)
  }

}
}
