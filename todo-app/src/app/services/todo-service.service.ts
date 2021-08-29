import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { Todo } from '../todo/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  apiUrl: string = "https://jsonplaceholder.typicode.com/todos"

  constructor(private httpClient:HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }

  getTodosByUser(userId:number):Observable<Todo[]>{
    let newPath =   "https://jsonplaceholder.typicode.com/todos?userId=" +userId
    return this.httpClient.get<Todo[]>(newPath);
  }


}
