import { Component } from '@angular/core';
import { User } from '../../../../core/models/User';
import { TableUsersComponent } from '../../components/tableusers/table-users.component';
import { UsersService } from '../../../../core/services/users.service';

@Component({
  selector: 'app-users',
  imports: [TableUsersComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
 users : User[] = [];
  //datos quemados de columnas
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'username', 'acciones'];

  constructor(
    private readonly usersService: UsersService
  ) {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
