import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/services/users.service';
import { RensponseUsers } from '../shared/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  responseUsersList!: RensponseUsers;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.getListaUsuarios()
      .subscribe(res => this.responseUsersList = res)
  }

}
