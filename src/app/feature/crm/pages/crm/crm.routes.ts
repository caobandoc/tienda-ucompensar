import {Routes} from '@angular/router';
import { CrmComponent } from './crm.component';
import { LoginComponent } from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {ProductsComponent} from '../products/products.component';

export const crmRoutes: Routes = [{
  path: '',
  component: CrmComponent,
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'products', component: ProductsComponent },
  ]
}];
