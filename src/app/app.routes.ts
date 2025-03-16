import {Routes} from '@angular/router';
import {HomeComponent} from './feature/home/pages/home/home.component';
import {ListproductsComponent} from './feature/home/pages/listproducts/listproducts.component';
import {LoginComponent} from './feature/home/pages/login/login.component';
import {RegisterComponent} from './feature/home/pages/register/register.component';
import {ProductsComponent} from './feature/crm/pages/products/products.component';
import {BrandsComponent} from './feature/crm/pages/brands/brands.component';
import {UsersComponent} from './feature/crm/pages/users/users.component';
import {CategoryComponent} from './feature/crm/pages/category/category.component';
import {CrmComponent} from './feature/crm/pages/crm/crm.component';
import { DetailproductComponent } from './feature/home/pages/detailproduct/detailproduct.component';
import {authGuard} from './core/guards/auth.guard';
import {loginGuard} from './core/guards/login.guard';

export const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'list',
  component: ListproductsComponent
},  {
  path: 'detailproduct/:id',
  component: DetailproductComponent
},{
  path: 'login',
  component: LoginComponent,
  canActivate:[loginGuard]
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'crm',
  component: CrmComponent,
  canActivate: [authGuard],
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
