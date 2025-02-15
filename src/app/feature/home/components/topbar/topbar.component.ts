import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-topbar',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  @Input() ifSearch: boolean = true;
}
