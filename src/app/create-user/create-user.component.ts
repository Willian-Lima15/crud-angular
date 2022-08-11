import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../core/services/users.service';
import { RequestCreate, ResponseCreate } from '../shared/users.model';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  usuario: RequestCreate = {
    name: '',
    job: ''
  }

  constructor(
    private userService: UsersService
  ) { }

  response!: ResponseCreate;

  ngOnInit() {
  }

  salvar() {
    this.userService.createUser(this.usuario).subscribe((res)=>{
        this.response = res;
    });
  }

}
