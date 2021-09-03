import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoServiceService } from '../services/todo-service.service';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = []
  page: number = 1


  constructor(private todoService: TodoServiceService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.todoService.getTodos().subscribe(data=>{
      this.todos = data
      
    })

    this.activatedRoute.params.subscribe(params=>{
      if(params["userId"]){
        this.getTodosByUser(params["userId"])
      }
    })
  }

  getTodosByUser(userId:number) {
    this.todoService.getTodosByUser(userId).subscribe(data=>{
      this.todos = data
    })
  }

  

}
