import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ShoppingListModel } from "./list-model";

@Injectable({providedIn:'root'})
export class ShoppingListService{
    shoppinglistchange = new Subject<ShoppingListModel[]>()
    id:number


    private list : ShoppingListModel[] = []


    getlist(){
        return this.list.slice()
    }

    AddShoppinglist(list : ShoppingListModel){
        this.list.push(list);
        this.shoppinglistchange.next(this.list.slice())


    }

    Ondelete(index:number){
    this.list.splice(index , 1),
    this.shoppinglistchange.next(this.list.slice())
    }


     getindex(index:number){
     return this.list[index]
     }


     editlist(index : number , newlist : ShoppingListModel){
        this.list[index] = newlist
        this.shoppinglistchange.next(this.list.slice())
     }   
     Addlist(list : ShoppingListModel){
        this.list.push(list);
        this.shoppinglistchange.next(this.list.slice())
     }
}