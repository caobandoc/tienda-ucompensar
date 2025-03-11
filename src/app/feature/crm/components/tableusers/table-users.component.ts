import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {User} from '../../../../core/models/User';
import {MatDialog} from '@angular/material/dialog';
import {ModalUsersComponent} from '../modal-users/modal-users.component';
import {ModalValidateComponent} from '../modal-validate/modal-validate.component';

@Component({
  selector: 'app-tableusers',

  imports: [],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.scss'
})
export class TableUsersComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: User[] = [];
  @Output() refreshUsers = new EventEmitter<void>();
  dialog = inject(MatDialog);

  openModal(data: User | null) {
    const dialogRef = this.dialog.open(ModalUsersComponent, {data: data})

    dialogRef.afterClosed().subscribe(() => {
      this.refreshUsers.emit();
    });
  }

  openModalDelete(data: User | null) {
    const dialogRef = this.dialog.open(ModalValidateComponent, {data: data})

    dialogRef.afterClosed().subscribe(() => {
      this.refreshUsers.emit();
    });
  }
}
