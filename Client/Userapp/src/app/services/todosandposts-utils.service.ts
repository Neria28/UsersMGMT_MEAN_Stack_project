import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../Classes/post';
import { Todo } from '../Classes/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosandpostsService {
 
  todoUri : string ="http://localhost:4150/api/todos";
  postUri : string ="http://localhost:4150/api/posts"
  constructor(private http : HttpClient) { }

//Requests for todos
  postTodo(userId : String ,todoObj : Todo){
    return this.http.post(`${this.todoUri}/${userId}`, todoObj)
  }

  putTodo(todoId : String , todo : Todo){
    return this.http
    .put(`${this.todoUri}/${todoId}` , todo)
  }

//Request for posts
postPost(userId : String ,postObj : Post){
  return this.http.post(`${this.postUri}/${userId}`, postObj)
}

}
