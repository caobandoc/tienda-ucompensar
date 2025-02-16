import { Component } from '@angular/core';
import { TablebrandComponent } from "../../components/tablebrand/tablebrand.component";
import { Brand } from '../../../../core/models/Brand';

@Component({
  selector: 'app-brands',
  imports: [TablebrandComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  brands : Brand[] = [{ id: 1, name: 'Apple' },
    { id: 2, name: 'Samsung' },
    { id: 3, name: 'Sony' },
    { id: 4, name: 'LG' },
    { id: 5, name: 'Dell' },
    { id: 6, name: 'HP' },
    { id: 7, name: 'Lenovo' },
    { id: 8, name: 'Asus' },
    { id: 9, name: 'Acer' },
    { id: 10, name: 'Microsoft' }];
  //datos quemados de columnas
  displayedColumns: string[] = ['id', 'nombre', 'acciones'];
}
