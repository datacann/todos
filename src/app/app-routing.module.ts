import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { CartComponent } from './cart/cart.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [

  {path:"", pathMatch:"full" ,component:TodoComponent},
  {path:"todos",component:TodoComponent},
  {path:"albums", component:AlbumsComponent},
  {path:"todos/:userId",component:TodoComponent},
  {path:"cart" , component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
