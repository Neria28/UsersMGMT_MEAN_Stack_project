import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/Classes/todo';
import { TodosandpostsService } from 'src/app/services/todosandposts-utils.service';
import { UserStorageService } from 'src/app/services/user-storage.service';
import { UserUtilsService } from 'src/app/services/user-utils.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() 
  todo : Todo = new Todo();
  
  sub : Subscription = new Subscription();

  constructor(private todoUtils : TodosandpostsService ,
              private userStorage : UserStorageService) { }

  updateTodo(todoId : String){
    this.todo.completed = true;
    this.sub = this.todoUtils.putTodo(todoId , this.todo)
      .subscribe(data => {
        alert(data)
        let userID = sessionStorage.getItem('userId')!;
        this.userStorage.markTodoCompleted(userID , this.todo._id!)
      })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
