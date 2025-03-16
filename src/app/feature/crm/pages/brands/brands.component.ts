import { Component } from '@angular/core';
import { TablebrandComponent } from "../../components/tablebrand/tablebrand.component";
import { Brand } from '../../../../core/models/Brand';
import {BrandsService} from '../../../../core/services/brands.service';

@Component({
  selector: 'app-brands',
  imports: [TablebrandComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  brands : Brand[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'acciones'];

  constructor(
    private readonly brandsService: BrandsService
  ) {
    this.loadBrands();
  }

  loadBrands(){
    this.brandsService.getBrands().subscribe((brands) => {
      this.brands = brands;
    });
  }

  onRefresh(){
    this.loadBrands();
  }
}
