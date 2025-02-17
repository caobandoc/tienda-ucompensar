import {Component} from '@angular/core';
import {Product} from '../../../../core/models/Product';
import {ProductsService} from '../../../../core/services/products.service';
import {TopbarComponent} from '../../components/topbar/topbar.component';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-listproducts',
  imports: [
    TopbarComponent,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './listproducts.component.html',
  styleUrl: './listproducts.component.scss'
})
export class ListproductsComponent {
  products: Product[] = [];

  constructor(
    private readonly productsService: ProductsService
  ) {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

}
