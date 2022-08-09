import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../core/services/users.service';
import { RequestUpdate } from '../shared/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: any;
  usuario!: RequestUpdate;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.userService.getUser(this.id).subscribe((res)=> {
      this.usuario = {
        name: `${res.data.first_name } ${res.data.last_name }`,
        job: ''
      }
    });
  }

  update() {
    this.userService.updateUser(this.id, this.usuario).subscribe(res=> {
      alert(`Atualizado`)
    })
  }

}
