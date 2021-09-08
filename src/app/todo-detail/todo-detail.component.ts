import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoServiceService } from '../services/todo-service.service';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo: Todo

  constructor(private todoService: TodoServiceService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getTodosById(params["id"])
      }
    });


  }

  getTodosById(id:number) {
    this.todoService.getTodosById(id).subscribe(data=>{
      this.todo = data
    })
  }

}
