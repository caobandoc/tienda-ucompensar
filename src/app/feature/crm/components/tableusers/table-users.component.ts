import {Component, inject, Input} from '@angular/core';
import {User} from '../../../../core/models/User';
import { MatDialog } from '@angular/material/dialog';
import { ModalUsersComponent } from '../modal-users/modal-users.component';

@Component({
  selector: 'app-tableusers',
  
  imports:[],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.scss'
})
export class TableUsersComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: User[] = [];
  dialog=inject(MatDialog);
  
  openModal(data:User|null){
    this.dialog.open(ModalUsersComponent,{data:data})
  }
}