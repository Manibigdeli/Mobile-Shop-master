import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ShoppingListModel } from "./list-model";

@Injectable({providedIn:'root'})
export class ShoppingListService{
    shoppinglistchange = new Subject<ShoppingListModel[]>()


    private list : ShoppingListModel[] = []


    getlist(){
        return this.list.slice()
    }

    AddShoppinglist(list : ShoppingListModel){
        this.list.push(list);
        this.shoppinglistchange.next(this.list.slice())


    }

   

}