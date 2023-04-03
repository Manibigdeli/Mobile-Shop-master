import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccessoriesDetailComponent } from "./accessories/accessories-detail/accessories-detail.component";
import { AccessoriesEditComponent } from "./accessories/accessories-edit/accessories-edit.component";
import { AccessoriesComponent } from "./accessories/accessories.component";
import { AccessoriesResolver } from "./accessories/accessories.resolver.service";
import { AuthComponent } from "./auth/auth.component";
import { EditComponent } from "./shop-mobile/edit/edit.component";
import { ShopDetailComponent } from "./shop-mobile/shop-detail/shop-detail.component";
import { ShopMobileComponent } from "./shop-mobile/shop-mobile.component";
import { ShoppingListEditComponent } from "./shopping-list/shopping-list-edit/shopping-list-edit.component";
import { ShoppingListStartComponent } from "./shopping-list/shopping-list-start/shopping-list-start.component";
import { ShoppingListViewComponent } from "./shopping-list/shopping-list-view/shopping-list-view.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";
import { UserListTableComponent } from "./user/user-list-table/user-list-table.component";
import { UserComponent } from "./user/user.component";
const Route:Routes = [
    {path:'' , redirectTo:'/shop' ,pathMatch:'full'},
    {path:'shop' , component:ShopMobileComponent,children:[
       {path:'new' , component:EditComponent} ,
       {path:':id' , component:ShopDetailComponent},
       {path:':id/edit' , component:EditComponent}
    ]},
   {path:'auth' , component:AuthComponent},
   
   
   {path:'user' , component:UserComponent,children:[
    {path:'new' , component:UserEditComponent},
    {path:':id', component:UserDetailComponent},
    {path:':id/edit' , component:UserEditComponent}
   ]},
   {path:'user-table' , component:UserListTableComponent},
   
   {path:'shopping-list' , component:ShoppingListComponent,children:[
    {path:'' , component:ShoppingListStartComponent},
    {path:':id' , component:ShoppingListViewComponent},
    {path:':id/edit' , component:ShoppingListEditComponent}

   ]},

   {path:'accessories' , component:AccessoriesComponent,children:[
    {path:'new',component:AccessoriesEditComponent},
    {path:':id' , component:AccessoriesDetailComponent,resolve:[AccessoriesResolver]},
    {path:':id/edit' , component:AccessoriesEditComponent,resolve:[AccessoriesResolver]}
   ]}


]











@NgModule({
    imports:[RouterModule.forRoot(Route)],
    exports:[RouterModule]
})
export class AppRoutingModule{}