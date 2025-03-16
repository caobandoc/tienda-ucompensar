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
import {BrandsService} from '../../../../core/services/brands.service';

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
  readonly data: {id: number, type: 'user'|'brand'} = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<ModalValidateComponent>);

  constructor(
    private readonly usersService: UsersService,
    private readonly brandService: BrandsService
  ) {}

  deleteItem() {
    if (this.data.type === 'user'){
      this.deleteUser();
    }
    if (this.data.type === 'brand'){
      this.deleteBrand();
    }
  }

  deleteUser() {
    this.usersService.deleteUser(this.data.id).subscribe({
      next: () =>{
        console.log('User deleted');
      this.dialogRef.close();
      },
      error: (error) =>{
        console.log(error);
      }
    })
  }

  deleteBrand() {
    this.brandService.deleteBrand(this.data.id).subscribe({
      next: () =>{
        console.log('Brand deleted');
      this.dialogRef.close();
      },
      error: (error) =>{
        console.log(error);
      }
    })
  }


}
