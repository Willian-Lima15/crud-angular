import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/services/users.service';
import { ResponseUsers } from '../shared/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  responseUsersList!: ResponseUsers;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.getListaUsuarios()
      .subscribe(res => this.responseUsersList = res)
  }

}
