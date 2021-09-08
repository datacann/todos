import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TodoServiceService } from '../services/todo-service.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todoAddForm:FormGroup

  constructor(private todoService:TodoServiceService, 
              private formBuilder:FormBuilder,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createTodoAddForm()
  }

  createTodoAddForm(){
    this.todoAddForm=this.formBuilder.group({
    userId:["",Validators.required],
    title:["",Validators.required],
    completed:["",Validators.required],
   })
}

add(){
  if(this.todoAddForm.valid){
   let todoModel=Object.assign({}, this.todoAddForm.value)
   this.todoService.add(todoModel).subscribe(data=>{
    this.toastrService.success("BAŞARILI")
   })
   }
  else{
    this.toastrService.error("HATA OLUŞTU")
  }
    }
}
