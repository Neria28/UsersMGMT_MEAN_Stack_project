import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodosandpostsService } from 'src/app/services/todosandposts-utils.service';
import { UserStorageService } from 'src/app/services/user-storage.service';
import { UserUtilsService } from 'src/app/services/user-utils.service';
import { Post } from 'src/app/Classes/post';
import { Todo } from 'src/app/Classes/todo';
import { User } from 'src/app/Classes/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output()
  userData: User = {};
  // Todos Section
  addTodoPresd: Boolean = false;
  newTodo: Todo = {
    title: '',
    completed: false
  }

  // Post Section
  addPostsPresd: Boolean = false;
  newPost: Post = {
    title: '',
    body: ''
  }

  allUsers: User[] = []

  sub: Subscription = new Subscription()

  constructor(private ar: ActivatedRoute,
    private TandPUtils: TodosandpostsService,
    private userStorage: UserStorageService,
    private userUtils: UserUtilsService) { }


  getUserData(id: string) {
    this.sub = this.userUtils.getUser(id).subscribe(data => this.userData = data);
  }

  //Add Todo to DB and to Local UsersStorage
  addTodoToUser(isValid: Boolean, userId: String) {
    if (isValid == true) {
      this.TandPUtils.postTodo(this.userData._id!, this.newTodo)
        .subscribe(data => {
          this.userStorage.addNewTodoToUser(userId, data as Todo)
          this.addTodoPresd = false
          this.sub = this.userUtils.getUser(userId).subscribe(data => this.userData = data)
        })
    } else {
      alert("todo must have title!")
    }
  }

  //Add Post to DB and to Local UsersStorage
  addPostToUser(isValid: Boolean, userId: String) {
    if (isValid == true) {
      this.sub = this.TandPUtils.postPost(this.userData._id!, this.newPost)
        .subscribe(data => {
          alert(data)
          this.userStorage.addNewPostToUser(userId, this.newPost)
          this.addPostsPresd = false
          this.sub = this.userUtils.getUser(userId.toString()).subscribe(data => this.userData = data)

        })
    } else {
      alert("Check both title and body fields!")
    }
  }

  ngOnInit(): void {
    this.ar.params.subscribe(data => {
      this.allUsers = this.userStorage.getUsersData()

      this.getUserData(data['userId'])
    })

  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
