import {Component, inject} from '@angular/core';
import {User} from '../../../../core/models/User';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef, MatDialogTitle
} from '@angular/material/dialog';
import {UsersService} from '../../../../core/services/users.service';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-modal-validate',
  imports: [
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatDialogTitle,
    MatIcon
  ],
  templateUrl: './modal-validate.component.html',
  styleUrl: './modal-validate.component.scss'
})
export class ModalValidateComponent {
  readonly user: User | null = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<ModalValidateComponent>);

  constructor(
    private readonly usersService: UsersService
  ) {}

  deleteUser() {
    // @ts-ignore
    this.usersService.deleteUser(this.user.id)
    .subscribe({
      next: () => {
        console.log('User deleted');
        this.dialogRef.close();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
