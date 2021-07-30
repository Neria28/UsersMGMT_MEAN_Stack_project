import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/Classes/todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  
  newTodo : Todo = new Todo();

  constructor(private router : Router) { }
  addTodoToUser(isValid : Boolean){
    if(isValid==true){
      
    }
  }
  Back(){
    let userId = sessionStorage.getItem("userId")
    console.log(userId)
    this.router.navigate(['/'])
    
  }

  ngOnInit(): void {
  }

}
