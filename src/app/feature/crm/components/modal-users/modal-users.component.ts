import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../../core/models/User';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
@Component({
  selector: 'app-modal-users',
  imports: [ReactiveFormsModule, MatFormField, MatInput, MatError, MatLabel],
  templateUrl: './modal-users.component.html',
  styleUrl: './modal-users.component.scss',
})
export class ModalUsersComponent {
  readonly user: User | null = inject(MAT_DIALOG_DATA);
  public userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [this.user?.id],
      name: [this.user?.name, Validators.required],
      lastName: [this.user?.lastName, Validators.required],
      username: [this.user?.username, Validators.required],
    });
  }

  onSubmit() {}
}
