import {Routes} from '@angular/router';
import {HomeComponent} from './feature/home/pages/home/home.component';
import {ListproductsComponent} from './feature/home/pages/listproducts/listproducts.component';
import {LoginComponent} from './feature/home/pages/login/login.component';
import {RegisterComponent} from './feature/home/pages/register/register.component';
import {CrmComponent} from './feature/crm/pages/crm/crm.component';
import {ProductsComponent} from './feature/crm/pages/products/products.component';

export const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'list',
  component: ListproductsComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'crm',
  component: CrmComponent,
  children: [{
    path: 'products',
    component: ProductsComponent
  }]
}];
