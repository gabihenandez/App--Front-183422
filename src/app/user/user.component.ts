import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any [] = []
  title = 'Gabriela Denisse Hernandez Penagos'

  constructor(protected userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserUsu()
    .subscribe(
      (data) => {//success
        this.users = data ['results']
      },
      (error) => {
        console.error(error)
      }
    )
  }

}