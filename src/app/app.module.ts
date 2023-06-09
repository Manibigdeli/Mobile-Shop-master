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
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';










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
import { ShoppingListStartComponent } from './shopping-list/shopping-list-start/shopping-list-start.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListViewComponent } from './shopping-list/shopping-list-view/shopping-list-view.component';
import { CommentComponent } from './comment/comment.component';
import { CommentItemComponent } from './comment/comment-item/comment-item.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';





registerLocaleData(en);

const importmodule = [
  NzDropDownModule,
  NzIconModule,
  NzInputModule,
  NzNotificationModule,
  MatMenuModule,
  NzTableModule,
  NzAvatarModule,
  MatProgressBarModule,
  NzAlertModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  NzMessageModule,
  NzCommentModule,
  NzFormModule,
  NzButtonModule,
  NzListModule
]

const components = [
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
  ShoppingListStartComponent,
  ShoppingListEditComponent,
  ShoppingListItemComponent,
  ShoppingListViewComponent,
]
@NgModule({
  declarations: [
    AppComponent,
    components,
   CommentItemComponent,
    CommentComponent,
    CommentListComponent
 

  
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    importmodule


    
  ],
  providers: [ShopService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
