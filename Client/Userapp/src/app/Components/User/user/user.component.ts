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

  sub : Subscription = new Subscription()
  showOtherData : Boolean = false
  
  constructor(private userUtils : UserUtilsService, private router : Router,
    private userStorage : UserStorageService) { }

  checkTodosStatus() : Boolean{
    return this.user.todos?.map(x=>x.completed).includes(false)? false : true;
  }

  chkSelectedUser() :boolean{
    return (this.user._id === this.userUtils.userId) ? true : false;
  }

  goToDashboard(){
    this.userUtils.userId = this.user._id as string;
    this.router.navigate(['/userDashboard/'+this.user._id])
  }
  
  updateUser(isValid : Boolean){
    if(isValid == true){
      this.sub = this.userUtils.putUser(this.user._id! , this.user)
        .subscribe(data => {
          alert(data)
        })
    }else{
      alert("Please Check All Fields")
    }
  }

  deleteUser(userId : String){
    this.sub = this.userUtils.deleteUser(userId)
      .subscribe(data => {alert(`uaser ${userId} Deleted`)
        this.userStorage.deleteUserData(userId)
        this.router.navigate(['/']);      
      });
      }

  ngOnInit(): void {
  
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
