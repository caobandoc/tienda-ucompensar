import {Routes} from '@angular/router';
import {HomeComponent} from './feature/home/pages/home/home.component';
import {ListproductsComponent} from './feature/home/pages/listproducts/listproducts.component';
import {crmRoutes} from './feature/crm/pages/crm/crm.routes';

export const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'list',
  component: ListproductsComponent
}, {
  path: 'crm',
  children: crmRoutes
}];
