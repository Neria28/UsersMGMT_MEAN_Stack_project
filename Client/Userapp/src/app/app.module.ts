import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
// Users Comps Section
import { UsermainComponent } from './Components/User/usermain/usermain.component';
import { UserComponent } from './Components/User/user/user.component';
import { AddUserComponent } from './Components/userDashboard/add-user/add-user.component'; 
// DashBoard Section
import { DashboardComponent } from './Components/userDashboard/dashboard/dashboard.component';
import { PostmainComponent } from './Components/userDashboard/posts/postmain/postmain.component';
import { PostComponent } from './Components/userDashboard/posts/post/post.component';
import { AddpostComponent } from './Components/userDashboard/posts/addpost/addpost.component';
import { TodomainComponent } from './Components/userDashboard/todos/todomain/todomain.component';
import { TodoComponent } from './Components/userDashboard/todos/todo/todo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRouter : Routes = [{path : 'userDashboard/:userId' , component : DashboardComponent},
                            {path : 'adduser' , component : AddUserComponent}]
@NgModule({
  declarations: [
    AppComponent,
    UsermainComponent,
    UserComponent,
    AddUserComponent,
    DashboardComponent,
    PostmainComponent,
    PostComponent,
    AddpostComponent,
    TodomainComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouter),
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
