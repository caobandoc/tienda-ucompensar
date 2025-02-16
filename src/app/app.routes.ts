import {Routes} from '@angular/router';
import {HomeComponent} from './feature/home/pages/home/home.component';
import {ListproductsComponent} from './feature/home/pages/listproducts/listproducts.component';
import {LoginComponent} from './feature/home/pages/login/login.component';
import {RegisterComponent} from './feature/home/pages/register/register.component';
import {CrmComponent} from './feature/crm/pages/crm/crm.component';
import {ProductsComponent} from './feature/crm/pages/products/products.component';
import {BrandsComponent} from './feature/crm/pages/brands/brands.component';
import {CategoryComponent} from './feature/crm/pages/category/category.component';
import {UsersComponent} from './feature/crm/pages/users/users.component';
import {ProductComponent} from './feature/home/pages/product/product.component';

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
  path: 'product/:id',
  component: ProductComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'crm',
  component: CrmComponent,
  children: [
    {
      path: 'brands',
      component: BrandsComponent
    },
    {
      path: 'category',
      component: CategoryComponent
    },
    {
      path: 'products',
      component: ProductsComponent
    }, {
      path: 'users',
      component: UsersComponent
    }
  ]
}];
