import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/Classes/todo';
import { User } from 'src/app/Classes/user';
import { UserStorageService } from 'src/app/services/user-storage.service';
import { UserUtilsService } from 'src/app/services/user-utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output()userData : User = new User();
  // Todos Section
  addTodoPresd : Boolean = false;
  newTodo : Todo = new Todo()
  
  addPostsPresd : Boolean = false;
  allUsers : User[] = []
  sub : Subscription = new Subscription()
  
  constructor(private ar : ActivatedRoute , private userUtils : UserUtilsService,
              private userStorage : UserStorageService) { }

  getUserData(id :string){
      this.userData = this.allUsers.find(x=> x._id === id)!;
  }
  ngOnInit(): void {
    this.allUsers = this.userStorage.getUsersData()
    let userId : string =""
    this.ar.params.subscribe(data => this.getUserData(data['userId']))
   
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }
}
