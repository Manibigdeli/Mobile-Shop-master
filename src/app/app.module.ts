import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import {MatProgressBarModule} from '@angular/material/progress-bar';




import { AppComponent } from './app.component';
import { ShopMobileComponent } from './shop-mobile/shop-mobile.component';
import { ShopItemComponent } from './shop-mobile/shop-item/shop-item.component';
import { ShopListComponent } from './shop-mobile/shop-list/shop-list.component';
import { ShopService } from './shop-mobile/shop.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ShopDetailComponent } from './shop-mobile/shop-detail/shop-detail.component';
import { EditComponent } from './shop-mobile/edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { AuthComponent } from './auth/auth.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AccessoriesItemComponent } from './accessories/accessories-item/accessories-item.component';
import { AccessoriesListComponent } from './accessories/accessories-list/accessories-list.component';
import { AccessoriesDetailComponent } from './accessories/accessories-detail/accessories-detail.component';
import { AccessoriesEditComponent } from './accessories/accessories-edit/accessories-edit.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserItemComponent } from './user/user-item/user-item.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserListTableComponent } from './user/user-list-table/user-list-table.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    ShopMobileComponent,
    ShopItemComponent,
    ShopListComponent,
    HeaderComponent,
    ShopDetailComponent,
    EditComponent,
    AuthComponent,
    AccessoriesComponent,
    AccessoriesItemComponent,
    AccessoriesListComponent,
    AccessoriesDetailComponent,
    AccessoriesEditComponent,
    UserComponent,
    UserDetailComponent,
    UserItemComponent,
    UserEditComponent,
    UserListComponent,
    UserListTableComponent,
    ShoppingListComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    NzDropDownModule,
    NzIconModule,
    NzInputModule,
    NzNotificationModule,
    MatMenuModule,
    NzTableModule,
    NzAvatarModule,
    MatProgressBarModule

    
  ],
  providers: [ShopService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
