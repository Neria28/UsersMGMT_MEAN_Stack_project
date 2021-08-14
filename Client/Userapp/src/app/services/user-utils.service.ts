import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserUtilsService {

  uri : string = "http://localhost:4150/api/users"

  userId :string = '';
  
  constructor(private http : HttpClient) { }
  
  getUsers(){
    return this.http.get<User[]>(this.uri)
  }

  getUser(id : String){
    return this.http.get<User>(`${this.uri}/${id}`)
  }

  postUser(user :User) {
    return this.http.post(this.uri, user)
  }

  putUser(id : String , user : User){
    return this.http.put(`${this.uri}/${id}`, user)
  }

  deleteUser(id : String){
    return this.http.delete(`${this.uri}/${id}`)
  }
}
