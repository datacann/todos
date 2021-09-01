import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlbumsComponent } from './albums/albums.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CartComponent } from './cart/cart.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    UserComponent,
    TodoComponent,
    AlbumsComponent,
    CartComponent,
    CartDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
