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
    , private accessories:AccessoriesService, private router:Router){
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
let name = ''
let description =''
let img = ''
const information = this.accessories.getid(this.id)
if(this.editmode){
  name = information.name
  description = information.description
  img =information.img
}


  this.form = new FormGroup({
    'name' : new FormControl(name,Validators.required),
    'description' : new FormControl(description,Validators.required),
    'img' : new FormControl(img,Validators.required)

  })
}


OnSubmit(){
  if(this.editmode){
  this.accessories.Updateaccessories(this.id , this.form.value);
  this.OnClear()
  }else{
  this.accessories.Addnew(this.form.value)
  this.OnClear()
  }
  console.log(this.form)

}


OnClear(){
  this.form.reset()
  this.router.navigate(['/accessories'])
}
}
