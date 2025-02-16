import {Component, Input} from '@angular/core';
import {User} from '../../../../core/models/User';

@Component({
  selector: 'app-tableusers',
  
  imports:[],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.scss'
})
export class TableUsersComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: User[] = [];
}