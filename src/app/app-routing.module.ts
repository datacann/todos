import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { CartComponent } from './cart/cart.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { TodoComponent } from './todo/todo.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [

  {path:"", pathMatch:"full" ,component:TodoComponent},
  {path:"todos",component:TodoComponent},
  {path:"albums", component:AlbumsComponent},
  {path:"todo/:id" , component:TodoDetailComponent},
  {path:"todos/:userId",component:TodoComponent},
  {path:"cart" , component:CartComponent},
  {path:"user-update" , component:UserUpdateComponent},
  {path:"todoAdd" , component:TodoAddComponent},
  {path:"todos/update/:id" , component:TodoUpdateComponent},
  {path:"todosdetail/:id" , component:TodoDetailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
