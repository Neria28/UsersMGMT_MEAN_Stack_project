import { Component, OnInit, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Classes/todo';

@Component({
  selector: 'app-todomain',
  templateUrl: './todomain.component.html',
  styleUrls: ['./todomain.component.css']
})
export class TodomainComponent implements OnInit {
  @Input()  userTodos : Todo[] = []
  
  constructor() { }
  
  ngOnInit(): void {
  
    
  }

}
