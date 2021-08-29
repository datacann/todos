import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : User[] = []
  currentUser:  User;
  allUser: User

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(data=>{
      this.users = data
      
    })
  }


  setCurrentUser(user:User){
    this.currentUser=user;
  }

  setAllUser(allUser: User){
    this.currentUser=allUser;
  }

  getCurrentUserClass(user:User){
    if(user==this.currentUser){
      return "list-group-item active"
    }else{
      return "list-group-item "
    }
  }

  getAllUserClass(allUser: User){
    if(allUser==this.currentUser){
      return "list-group-item active"
    }else{
      return "list-group-item "
    }
  }



}
