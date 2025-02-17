import { Component } from '@angular/core';
import {TopbarComponent} from '../../components/topbar/topbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    TopbarComponent,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
