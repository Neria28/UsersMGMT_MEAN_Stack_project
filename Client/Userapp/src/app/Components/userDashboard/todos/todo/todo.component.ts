import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/Classes/todo';
import { TodosandpostsService } from 'src/app/services/todosandposts-utils.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo : Todo = new Todo();
  sub : Subscription = new Subscription();
  constructor(private todoUtils : TodosandpostsService) { }

  updateTodo(todoId : String){
    this.todo.completed = true;
    this.sub = this.todoUtils.putTodo(todoId , this.todo)
      .subscribe(data => alert(data))
  }
  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
