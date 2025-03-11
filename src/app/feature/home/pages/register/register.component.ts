import {Component, inject} from '@angular/core';
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {User} from '../../../../core/models/User';
import {UsersService} from '../../../../core/services/users.service';
import {Router} from '@angular/router';
import {TopbarComponent} from '../../components/topbar/topbar.component';

@Component({
  selector: 'app-register',
  imports: [
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    TopbarComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  readonly user: User | undefined;
  public userForm: FormGroup;
  private readonly router = inject(Router);

  constructor(
    private readonly fb: FormBuilder,
    private readonly usersService: UsersService
  ) {
    this.userForm = this.fb.group({
      name: [this.user?.name, Validators.required],
      lastname: [this.user?.lastname, Validators.required],
      username: [this.user?.username, Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.createUser();
    }
  }

  createUser(){
    this.usersService.createUser(this.userForm.value)
      .subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

}
