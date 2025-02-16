import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {TopbarComponent} from '../../components/topbar/topbar.component';

@Component({
  selector: 'app-home',
  imports: [
    TopbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
