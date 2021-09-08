import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PagingInfo } from '../models/paginInfo';
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
  filterText:string =""
  pagingInfo:PagingInfo= {pageSize:10,currentPage:0,pageCount:0}
  pageArray:number[] = []
  loading: boolean = true


  constructor(private todoService: TodoServiceService, private activatedRoute:ActivatedRoute,private toastrService:ToastrService) { }

  ngOnInit(): void {

    this.todoService.getTodos().subscribe(data=>{
      this.todos = data
      
    })

    this.activatedRoute.params.subscribe(params=>{
      if(params["userId"]){
        this.getTodosByUser(params["userId"])
      }
    })

    this.delay(1000)
    this.getTodosByPage(1)
  }

  getTodosByUser(userId:number) {
    this.todoService.getTodosByUser(userId).subscribe(data=>{
      this.todos = data
    })
  }

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(() => resolve(), ms)).then(() => {
      this.todoService.getTodos().subscribe(data => {
       
        this.loading = false;
        this.pagingInfo.pageCount=Math.ceil(data.length/this.pagingInfo.pageSize)
        this.generatePageArray(this.pagingInfo.pageCount)
        console.log(this.pageArray)
      })
    });
  }

  generatePageArray(pageCount:number){
    for (let i = 0; i < pageCount; i++) {
      
      this.pageArray.push(i)
    }

  }


  getTodosByPage(page:number){
    this.todoService.getTodosByPage(page).subscribe(data=>{
      this.todos=data
      this.pagingInfo.currentPage = page
    })
  }

  getCurrentPageStyle(index:number):string{
    if (index+1 === this.pagingInfo.currentPage) {
      return "page-item active"
    }else{
      return "page-item "
    }
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe((data) => {
      this.todos = this.todos.filter((t) => t.id !== id);
      this.toastrService.success('Todo silindi', 'Başarılı');
    });
  }
  

}
