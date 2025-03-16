import { Component } from '@angular/core';
import {TopbarComponent} from '../../components/topbar/topbar.component';
import {ProductsService} from '../../../../core/services/products.service';
import {Product} from '../../../../core/models/Product';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    TopbarComponent,
    NgOptimizedImage,
    NgClass,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  carruselProducts: Product[] = [];
  ourProducts: Product[] = [];

  constructor(
    private readonly productService: ProductsService,
  ) {
    for (let i = 1; i <= 3; i++) {
      this.productService.getProduct(i).subscribe((product) => {
        this.carruselProducts.push(product);
      });
    }
    for (let i = 4; i <= 6; i++) {
      this.productService.getProduct(i).subscribe((product) => {
        this.ourProducts.push(product);
      });
    }
  }
}
