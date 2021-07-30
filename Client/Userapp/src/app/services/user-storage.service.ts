import { Injectable } from '@angular/core';
import { User } from '../Classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  UsersStorage : User[] = []

  constructor() { }
  
  //Save The Users in Service (less Data Requests)
  saveUsersData(users : User[]){
    this.UsersStorage = users
  }

  getUsersData(){
    return this.UsersStorage;
  }

  deleteUserData(userId : String){
    const allUsers = this.UsersStorage;
    const crntUserIndex = this.UsersStorage.findIndex((user:User)=> user._id === userId);
    allUsers.splice(crntUserIndex , 1)
    this.UsersStorage = allUsers;

  }

  addUserData(user : User){
    
  }
}