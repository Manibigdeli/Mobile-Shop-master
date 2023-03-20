import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ShoppingListModel } from "./list-model";

@Injectable({providedIn:'root'})
export class ShoppingListService{
    shoppinglistchange = new Subject<ShoppingListModel[]>()


    private list : ShoppingListModel[] = [
        new ShoppingListModel('ip 14' , '' , 'mani test item')
        
    ]


    getlist(){
        return this.list.slice()
    }

    AddShoppinglist(list : ShoppingListModel){
        this.list.push(list);
        this.shoppinglistchange.next(this.list.slice())


    }

}