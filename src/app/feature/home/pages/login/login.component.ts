import {Component, inject} from '@angular/core';
import {TopbarComponent} from '../../components/topbar/topbar.component';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoginService} from '../../../../core/services/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [
    TopbarComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm: FormGroup;
  private readonly _snackBar = inject(MatSnackBar);
  private readonly router = inject(Router);

  constructor(
    private readonly fb: FormBuilder,
    private readonly loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit(){
    this.loginService.postLogin(this.loginForm.value)
      .subscribe({
        next: () => {
          this.router.navigate(['/crm']);
        },
        error: (error) => {
          const errorMessage = error.error?.detail || 'An error occurred';
          this.openSnackBar(errorMessage);
        }
      })
  }

  temporal(){
    localStorage.setItem('token', 'Temporal');
    this.router.navigate(['/crm']);
  }

  openSnackBar(message: string){
      this._snackBar.open(message, undefined, {
        duration: 5000,
      })
  }
}
