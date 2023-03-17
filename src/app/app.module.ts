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
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    
  ],
  providers: [ShopService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
