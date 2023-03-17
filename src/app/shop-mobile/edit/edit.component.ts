import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute , Params, Router } from '@angular/router';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(private ShopService:ShopService , private route:ActivatedRoute,
    private router:Router){
    this.route.params.subscribe(
     (params:Params)=>{
       this.id = +params['id']
       this.editmode = params['id'] !=null
       this.initform()
     }
    )
   }

  form:UntypedFormGroup;
  id:number
  editmode = false
  
 

 
 private initform(){
  let name = ''
  let img = ''
  let description = ''
  //get id
  const information = this.ShopService.getid(this.id);
  if(this.editmode){
    name = information.name;
    img = information.img;
    description = information.description;
  }
 


  this.form = new UntypedFormGroup({
    'name' : new UntypedFormControl(name,Validators.required),
    'img'  : new UntypedFormControl(img,Validators.required),
    'description' : new UntypedFormControl(description,Validators.required)
  })
  }


OnSubmit(){
if(this.editmode){
 this.ShopService.Updateitem(this.id , this.form.value);
 this.OnClare()
}else{
  this.ShopService.Add(this.form.value);
  this.OnClare()
}
console.log(this.form)
}

OnClare(){
  this.form.reset()
  this.router.navigate(['/shop'])
}




}
