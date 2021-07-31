import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Classes/user';
import { UserStorageService } from 'src/app/services/user-storage.service';
import { UserUtilsService } from 'src/app/services/user-utils.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userToAdd : User = {name:"" , email : ""}
  sub : Subscription = new Subscription();

  constructor(
    private userUtils : UserUtilsService , 
    private router:Router,
    private userStorage : UserStorageService 
    ){}

  onSubmit(f : NgForm){
    if(f.valid == true){
    this.sub = this.userUtils.postUser(this.userToAdd)
      .subscribe(data => {
        alert(data)
        this.router.navigate(['/'])
        this.userStorage.addUserData(this.userToAdd);
        this.router.navigate([''])
      })
    }else{
      alert("Both Name and Email Required!")
    }
  }


  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
