import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  listform:FormGroup
  id:number
  editmode = true

constructor(private shoppingService:ShoppingListService){}


initform(){
let name = ''
let description = ''

const information = this.shoppingService.getindex(this.id);



if(this.editmode){
  name = information.name
  description = information.description
}


  this.listform = new FormGroup({
    'name' : new FormControl(name),
    'description' : new FormControl(description)
  })
}


  Onsub(){
    if(this.editmode){
    this.shoppingService.editlist(this.id , this.listform.value)
    }else{
    this.shoppingService.AddShoppinglist(this.listform.value)
    }

  }
}
