import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Classes/user';
import { UserStorageService } from 'src/app/services/user-storage.service';
import { UserUtilsService } from 'src/app/services/user-utils.service';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-usermain',
  templateUrl: './usermain.component.html',
  styleUrls: ['./usermain.component.css']
})
export class UsermainComponent implements OnInit {
  faUserPlus = faUserPlus
  @Output()
  users : User[] = []
  @Output()
  searchUsers : User[] = []

  addUserPresd : Boolean = false;
  
  sub:Subscription = new Subscription();
  constructor(private userUtils : UserUtilsService, private userStorage : UserStorageService) { }

  ngOnInit(): void {
    //Get And Set Users From DataBase
    this.sub = this.userUtils.getUsers().subscribe(data=> {
      this.users = data;
      this.searchUsers = data;
      //Seve Users for other copmponents
      this.userStorage.saveUsersData(data);
    });
  }

  search(inp : string){
    if(inp != ''){
      console.log(inp)
      this.searchUsers = this.users.filter(x=> x.name!.includes(inp)||x.email!.includes(inp))
    }else{
      this.searchUsers = this.users
    }
    
  }
  ngOnDestroy(){
    this.sub.unsubscribe()
  }
}
