import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/pages/home/home.component';
import { AdminComponent } from './feature/admin/pages/admin/admin.component';
import { CrmComponent } from './feature/crm/pages/crm/crm.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'crm',
    component: CrmComponent
  }
];
