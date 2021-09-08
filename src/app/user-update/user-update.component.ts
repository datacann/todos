import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  

  users : User[] = []
  brandUpdateForm : FormGroup

  constructor(private userService:UserService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data=>{
      this.users = data
      
    })
  }

  BrandUpdateForm()
  {
    this.brandUpdateForm = this.formBuilder.group({
      name : ["", Validators.required],
      userName : ["",Validators.required],
      email : ["",Validators.required],
    
    });
  }

  
}
