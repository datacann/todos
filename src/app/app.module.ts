import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
import { NgxPaginationModule } from 'ngx-pagination';
import { TodoFilterPipe } from './pipe/todo-filter.pipe';
import { UserFilterPipe } from './pipe/user-filter.pipe';
import { UserUpdateComponent } from './user-update/user-update.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    UserComponent,
    TodoComponent,
    AlbumsComponent,
    CartComponent,
    CartDetailComponent,
    TodoFilterPipe,
    UserFilterPipe,
    UserUpdateComponent,
    TodoAddComponent,
    TodoUpdateComponent,
    TodoDetailComponent,
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule ,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
