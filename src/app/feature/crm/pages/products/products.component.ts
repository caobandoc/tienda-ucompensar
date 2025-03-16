import { Component } from '@angular/core';
import {ProductsService} from '../../../../core/services/products.service';
import {TableProductsComponent} from '../../components/tableproducts/table-products.component';
import {Product} from '../../../../core/models/Product';

@Component({
  selector: 'app-products',
  imports: [
    TableProductsComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products : Product[] = [];
  //datos quemados de columnas
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'descripcion', 'imagen', 'cantidad','acciones'];

  constructor(
    private readonly productsService: ProductsService
  ) {
    this.loadProducts();
  }

  onRefresh(){
    this.loadProducts();
  }

  private loadProducts() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
