import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { Todo } from '../todo/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  apiUrl: string = "http://localhost:3000/todos"

  constructor(private httpClient:HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }

  getTodosByUser(userId:number):Observable<Todo[]>{
    let newPath =   "http://localhost:3000/todos?userId=" + userId
    return this.httpClient.get<Todo[]>(newPath);
  }


}
