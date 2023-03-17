import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccessoriesDetailComponent } from "./accessories/accessories-detail/accessories-detail.component";
import { AccessoriesEditComponent } from "./accessories/accessories-edit/accessories-edit.component";
import { AccessoriesComponent } from "./accessories/accessories.component";
import { AuthComponent } from "./auth/auth.component";
import { EditComponent } from "./shop-mobile/edit/edit.component";
import { ShopDetailComponent } from "./shop-mobile/shop-detail/shop-detail.component";
import { ShopMobileComponent } from "./shop-mobile/shop-mobile.component";
const Route:Routes = [
    {path:'' , redirectTo:'/shop' ,pathMatch:'full'},
    {path:'shop' , component:ShopMobileComponent,children:[
       {path:'new' , component:EditComponent} ,
       {path:':id' , component:ShopDetailComponent},
       {path:':id/edit' , component:EditComponent}
    ]},
    
   {path:'auth' , component:AuthComponent},
   {path:'accessories' , component:AccessoriesComponent,children:[
    {path:'new',component:AccessoriesEditComponent},
    {path:':id' , component:AccessoriesDetailComponent},
    {path:':id/edit' , component:AccessoriesEditComponent}
   ]}


]











@NgModule({
    imports:[RouterModule.forRoot(Route)],
    exports:[RouterModule]
})
export class AppRoutingModule{}