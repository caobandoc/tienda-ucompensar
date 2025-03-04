import { Component, inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { User } from '../../../../core/models/User';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {UsersService} from '../../../../core/services/users.service';

@Component({
  selector: 'app-modal-users',
  imports: [ReactiveFormsModule, MatFormField, MatInput, MatError, MatLabel],
  templateUrl: './modal-users.component.html',
  styleUrl: './modal-users.component.scss',
})
export class ModalUsersComponent {
  readonly user: User | null = inject(MAT_DIALOG_DATA);
  public userForm: FormGroup;
  readonly dialogRef = inject(MatDialogRef<ModalUsersComponent>);

  constructor(
    private readonly fb: FormBuilder,
    private readonly usersService: UsersService
  ) {
    this.userForm = this.fb.group({
      id: [this.user?.id],
      name: [this.user?.name, Validators.required],
      lastname: [this.user?.lastname, Validators.required],
      username: [this.user?.username, Validators.required],
      password: [this.user?.password, [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.userForm.value.id){
        this.updateUser();
      }else{
        this.createUser();
      }
    }
  }

  createUser(){
    this.usersService.createUser(this.userForm.value)
    .subscribe({
      next: () => {
        console.log('User created');
        this.dialogRef.close();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  updateUser(){
    this.usersService.updateUser(this.userForm.value, this.userForm.value.id)
    .subscribe({
      next: () => {
        console.log('User updated');
        this.dialogRef.close();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
