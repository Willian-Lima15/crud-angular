import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../core/services/users.service';
import { RequestCreate, ResponseCreate } from '../shared/createUsers';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  formCreateUser!: FormGroup;
  usuario!: RequestCreate;

  constructor(
    private fb : FormBuilder,
    private userService: UsersService
  ) { }

  usuarioResponse!: ResponseCreate

  ngOnInit(): void {
    this.formCreateUser = this.fb.group({
      nome: [''],
      proficao: ['']
    })
  }

  salvar() {
    this.userService.criarUsuario(this.usuario).subscribe((res)=>{
        this.usuarioResponse = res;
    })
  }

}
