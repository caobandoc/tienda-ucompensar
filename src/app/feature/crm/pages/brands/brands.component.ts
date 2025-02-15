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
  brands : Brand[] = [{id:1, name:'Carlos'}, {id:2, name:'Camilo'}];
  //datos quemados de columnas
  displayedColumns: string[] = ['id', 'nombre', 'acciones'];
}
