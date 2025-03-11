import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {LoginService} from '../../../../core/services/login.service';

@Component({
  selector: 'app-crm',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.scss'
})
export class CrmComponent {

  private readonly router = inject(Router);

  constructor(private readonly loginService: LoginService) {
  }

  closeSession(){
    this.loginService.deleteToken();
    this.router.navigate(['/']);
  }
}
