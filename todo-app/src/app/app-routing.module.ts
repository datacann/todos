import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [

  {path:"", pathMatch:"full" ,component:TodoComponent},
  {path:"todos",component:TodoComponent},
  {path:"todos/:userId",component:TodoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
