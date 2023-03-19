import { Component } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms'
import { ActivatedRoute, Params } from '@angular/router';
import { USerService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  form : FormGroup
  id:number
  editmode = false
constructor(private userService:USerService,private route :ActivatedRoute){
  this.route.params.subscribe(
    (params:Params)=>{
      this.id = +params['id'];
      this.editmode = params['id'] !=null
      this.forminit()
    }
  )
}
 



forminit(){
    let username = ''
    let name = ''
    let family = ''
    let phonenumber = ''
    const infromation = this.userService.getuserid(this.id);

if(this.editmode){
  username = infromation.name
  name = infromation.name
  family = infromation.family
  phonenumber = infromation.phonenumber 
}
   

    this.form = new FormGroup({
      'username' : new FormControl(username),
      'name' : new FormControl(name),
      'family' : new FormControl(family),
      'phonenumber' : new FormControl(phonenumber)
    })
   
  }

  OnSubmit(){
    if(this.editmode){
    this.userService.UpdateUser(this.id , this.form.value)
    }else{
    this.userService.AddUser(this.form.value)
    }
    console.log(this.form)
  }


  OnClear(){
    this.form.reset()
  }
}
