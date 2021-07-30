import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Classes/user';
import { UserStorageService } from 'src/app/services/user-storage.service';
import { UserUtilsService } from 'src/app/services/user-utils.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user : User = new User()

  isClicked : Boolean = false;
  sub : Subscription = new Subscription()
  showOtherData : Boolean = false
  
  constructor(private userUtils : UserUtilsService, private router : Router,
    private userStorage : UserStorageService) { }

  checkTodosStatus() : Boolean{
    return this.user.todos?.map(x=>x.completed).includes(false)? false : true;
  }

  goToDashboard(){
    this.isClicked = !this.isClicked
    sessionStorage["userId"] = this.user._id
    this.router.navigate(['/userDashboard/'+this.user._id])
  }
  
  updateUser(isValid : Boolean){
    if(isValid == true){
      this.sub = this.userUtils.putUser(this.user._id! , this.user)
        .subscribe(data => alert(data))
    }else{
      alert("Please Check All Fields")
    }
  }

  deleteUser(){
    this.sub = this.userUtils.deleteUser(this.user._id!)
      .subscribe(data => {alert(`uaser ${this.user.name!} Deleted`)
        this.userStorage.deleteUserData(this.user._id!)
        this.router.navigate(['/']);      
      });
      }

  ngOnInit(): void {
  
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
